const notifications = require('./notifications');
const FoodNotification = require('./notifications/FoodNotification/FoodNotification');


describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(3);
  });

  it('requires third notification to have type food availability', () => {
    expect(notifications[2].type).toEqual("foodAvailable");
  });
  it('requires foodAvailable notification to have default value of "foo bar"', () => {
    expect(notifications[2].defaultValue).toEqual("foo bar");
  });
  it('requires foodAvailable notification to be prefixed with its own view', () => {
    expect(notifications[2].view).toEqual(FoodNotification);
  });

});
