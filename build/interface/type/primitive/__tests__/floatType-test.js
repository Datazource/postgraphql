"use strict";
const floatType_1 = require('../floatType');
test('name returns float', () => {
    expect(floatType_1.default.name).toBe('float');
});
test('isTypeOf will be true for any number', () => {
    expect(floatType_1.default.isTypeOf(undefined)).toBe(false);
    expect(floatType_1.default.isTypeOf(null)).toBe(false);
    expect(floatType_1.default.isTypeOf(true)).toBe(false);
    expect(floatType_1.default.isTypeOf(false)).toBe(false);
    expect(floatType_1.default.isTypeOf(21)).toBe(true);
    expect(floatType_1.default.isTypeOf(3.1415)).toBe(true);
    expect(floatType_1.default.isTypeOf('hello')).toBe(false);
    expect(floatType_1.default.isTypeOf({})).toBe(false);
    expect(floatType_1.default.isTypeOf([])).toBe(false);
    expect(floatType_1.default.isTypeOf(() => { })).toBe(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRUeXBlLXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJmYWNlL3R5cGUvcHJpbWl0aXZlL19fdGVzdHNfXy9mbG9hdFR5cGUtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEJBQXNCLGNBRXRCLENBQUMsQ0FGbUM7QUFFcEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO0lBQ3pCLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQUMsQ0FBQTtBQUVGLElBQUksQ0FBQyxzQ0FBc0MsRUFBRTtJQUMzQyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakQsTUFBTSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM1QyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0MsTUFBTSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0MsTUFBTSxDQUFDLG1CQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzFDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMxQyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUQsQ0FBQyxDQUFDLENBQUEifQ==