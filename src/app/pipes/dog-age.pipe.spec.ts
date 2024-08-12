import { DogAgePipe } from './dog-age.pipe';

describe('DogAgePipe', () => {
  it('create an instance', () => {
    const pipe = new DogAgePipe();
    expect(pipe).toBeTruthy();
  });
});
