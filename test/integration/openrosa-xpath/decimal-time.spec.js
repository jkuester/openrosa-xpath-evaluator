describe( 'decimal-time()', () => {
  TODO()
  xit('decimates times', () => {
    assertNumber('decimal-time("06:00:00.000-07:00")', 0.250);
    assertNumber('decimal-time("06:00:00.000-01:00")', 0.000);
    assertNumber('decimal-time("06:00:59.000-07:00")', 0.251);
    assertNumber('decimal-time("23:59:00.000-07:00")', 0.999);
    assertNumber('decimal-time("23:59:00.000-13:00")', 0.249);
    assertNumber('decimal-time("a")', NaN);
    assertNumber('decimal-time("24:00:00.000-07:00")', NaN);
    assertNumber('decimal-time("06:00:00.000-24:00")', NaN);
    assertNumber('decimal-time("06:60:00.000-07:00")', NaN);
    assertNumber('decimal-time("06:00:60.000-07:00")', NaN);
    assertNumber('decimal-time("23:59:00.000-07:60")', NaN);
    assertNumber('decimal-time("now()")', NaN);
  });

  xit( `facilitates time calculations and evaluates`, () => {
    assertNumber('decimal-time("12:00:00.000-07:00") - decimal-time("06:00:00.000-07:00")', 0.250);
  });

  xit('with invalid args throws an error', () => {
    assert.throw(() => xEval('decimal-time("06:00:00.000-07:00", 2)'), Error);
  });
});
