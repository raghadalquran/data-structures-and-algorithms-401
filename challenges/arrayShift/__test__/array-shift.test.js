'use strict';

const insertShiftArray = require('../array-shift');

describe('array-shift.js', () => {
  it('returns an array with the new value added at the middle index for odd-lengthed arrays.', () => {
    expect(insertShiftArray([2, 4, 6, 8], 'value')).toEqual([2, 4, 'value',6 ,8]);
  });


});
