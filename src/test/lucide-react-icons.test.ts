import { describe, expect, it } from "vitest";
import {
  // Icons currently used by application and UI components.
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Dot,
  GripVertical,
  Menu,
  MoreHorizontal,
  PanelLeft,
  Search,
  X,
  // Icons added or exposed by lucide-react 1.74.0.
  BotCheck,
  BotMinus,
  BotPlus,
  CircleBounce,
  CirclePersonArmsSpread,
  Cinema,
  Doghouse,
  HandTruck,
  HouseArrowLeft,
  HouseArrowRight,
  NigerianNaira,
  StrokeWidth,
  WarehouseWaves,
} from "lucide-react";

const existingIcons = {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Circle,
  Dot,
  GripVertical,
  Menu,
  MoreHorizontal,
  PanelLeft,
  Search,
  X,
};

const iconsAvailableIn174 = {
  BotCheck,
  BotMinus,
  BotPlus,
  CircleBounce,
  CirclePersonArmsSpread,
  Cinema,
  Doghouse,
  HandTruck,
  HouseArrowLeft,
  HouseArrowRight,
  NigerianNaira,
  StrokeWidth,
  WarehouseWaves,
};

describe("lucide-react icon exports", () => {
  it("keeps exporting every icon the application imports", () => {
    for (const [name, icon] of Object.entries(existingIcons)) {
      expect(icon, `${name} should be exported by lucide-react`).toBeTruthy();
      expect(["function", "object"], `${name} should be a renderable icon`).toContain(typeof icon);
    }
  });

  it("provides the icons introduced in lucide-react 1.74.0", () => {
    for (const [name, icon] of Object.entries(iconsAvailableIn174)) {
      expect(icon, `${name} should be exported by lucide-react 1.74.0`).toBeTruthy();
      expect(["function", "object"], `${name} should be a renderable icon`).toContain(typeof icon);
    }
  });
});
