// /src/lib/utils/date.ts
export const isTodayVisible = (visibilityDays: string[]): boolean => {
    const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayName = dayNames[today];
    
    return visibilityDays.includes(todayName);
  };