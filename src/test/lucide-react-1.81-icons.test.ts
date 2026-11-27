import { describe, expect, it } from "vitest";
import * as lucide from "lucide-react";

// Icons the application's components import today. The 1.81.0 bump must keep
// every one of them exported so the existing call sites keep working.
const currentlyUsedIcons = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUpRight",
  "Check",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "Circle",
  "Dot",
  "GripVertical",
  "Menu",
  "MoreHorizontal",
  "PanelLeft",
  "Search",
  "X",
] as const;

// Icons added in lucide-react 1.81.0. They are undefined on 1.74.0, so this
// test fails before the dependency bump and passes after it.
const iconsAddedIn181 = ["BowlChopsticks", "Elevator", "GlobeClock", "SteeringWheel"] as const;

describe("lucide-react 1.81 icon exports", () => {
  it("adds the 1.81.0 icons without dropping the icons the app uses", () => {
    for (const name of iconsAddedIn181) {
      const icon = lucide[name];

      expect(icon, `${name} should be exported by lucide-react 1.81.0`).toBeTruthy();
      expect(["function", "object"], `${name} should be a renderable icon`).toContain(typeof icon);
    }

    for (const name of currentlyUsedIcons) {
      const icon = lucide[name];

      expect(icon, `${name} should still be exported by lucide-react`).toBeTruthy();
      expect(["function", "object"], `${name} should be a renderable icon`).toContain(typeof icon);
    }
  });
});
