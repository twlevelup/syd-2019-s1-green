const routes = require('./routes');

describe('routes', () => {

  it('all routes should exist', () => {
    expect(routes['/']).toBeDefined();
    // expect(routes['contacts']).toBeDefined();
    expect(routes['team']).toBeDefined();
    expect(routes['404']).toBeDefined();
    expect(routes['mealList']).toBeDefined();
    expect(routes['foodRecipe']).toBeDefined();
    expect(routes['foodInformation']).toBeDefined();
    expect(routes['delivery']).toBeDefined();
    expect(routes['groceryDelivery']).toBeDefined();
    expect(routes['groceryDeliveryDetails']).toBeDefined();
    expect(routes['nutritionTracker']).toBeDefined();
  });
});
