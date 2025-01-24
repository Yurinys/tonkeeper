export interface IBatteryUIStore {
  isViewedBatteryScreen: boolean;
  actions: {
    setIsViewedBatteryScreen: (isViewed: boolean) => void;
  };
}
Add UI - adding new feature