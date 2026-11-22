import { describe, expect, it } from "vitest";
import { act, type ReactElement } from "react";
import { createRoot } from "react-dom/client";
import { Toaster, toast } from "sonner";
import { Drawer as AppDrawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(element: ReactElement) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  return {
    container,
    root,
    render: () => act(async () => root.render(element)),
    cleanup: () => {
      act(() => root.unmount());
      container.remove();
    },
  };
}

describe("UI vendor dependency upgrades", () => {
  it("routes a sonner toast to the toaster with a matching id (sonner 2 behaviour)", async () => {
    const app = mount(
      <>
        <Toaster />
        <Toaster id="side-panel" />
      </>,
    );

    try {
      await app.render();

      await act(async () => {
        toast("Synthetic saved notice", { toasterId: "side-panel" });
        // Give every mounted toaster time to render the toast.
        await new Promise((resolve) => setTimeout(resolve, 50));
      });

      // sonner 2 renders a toast on the toaster whose id matches `toasterId` only.
      // On sonner 1 the id / toasterId options are ignored and both toasters show it.
      expect(app.container.querySelectorAll("[data-sonner-toast]")).toHaveLength(1);
    } finally {
      app.cleanup();
    }
  });

  it("renders the vaul 1 drawer animate state flag for an initially open drawer", async () => {
    const app = mount(
      <AppDrawer defaultOpen>
        <DrawerContent>
          <DrawerTitle>Synthetic drawer title</DrawerTitle>
        </DrawerContent>
      </AppDrawer>,
    );

    try {
      await app.render();

      const drawer = document.querySelector("[data-vaul-drawer]");

      expect(drawer).not.toBeNull();
      // Introduced in vaul 1; absent from the 0.9.x drawer content.
      expect(drawer?.hasAttribute("data-vaul-animate")).toBe(true);
    } finally {
      app.cleanup();
    }
  });
});
