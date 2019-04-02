const notifications = require('./notifications');

describe('notifications', () => {
  it('all notifications should exist', () => {
    expect(notifications).toHaveLength(3);
  });

  it('requires third notification to have type food availability', () => {
    expect(notifications[2].type).toEqual("Food Available");
  });
});
