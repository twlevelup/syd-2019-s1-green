const notifications = require('./notifications');
const FoodNotification = require('./notifications/FoodNotification/FoodNotification');


describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(4);
  });

  it('requires third notification to have type food availability', () => {
    expect(notifications[2].type).toEqual("foodAvailable");
  });
  it('requires foodAvailable notification to have default value of "Hi, there is leftover food nearby at location [XX]. Get in quick for a yummy meal!"', () => {
    expect(notifications[2].defaultValue).toEqual("Hi, there is leftover food nearby at location [XX]. Get in quick for a yummy meal!");
  });
  it('requires foodAvailable notification to be prefixed with its own view', () => {
    expect(notifications[2].view).toEqual(FoodNotification);
  });
  it('requires foodAvailableBeta notification to include an additional message for Accept/Decline', () => {
    expect(notifications[3].defaultValue).toEqual("Hi, there is leftover food nearby at location [XX]. Click right for Accept or Left for Decline. Up for Pause Notifications for 2hrs");
  });
});