describe('Test Suite : Test if Class is added or removed', () => {

  let background;

  beforeEach(() => {
    document.querySelector('.js-test-container').innerHTML = `
      <div class="background js-background"></div>
    `;

    background = document.querySelector('.js-background');
    
  });

   it('Checks if the class play is added', () => {
        
    background.classList.add('play');
    expect(
     background.classList.contains('play')).toBe(true);
  });


  it('Checks if the class play is removed', () => {
    
    background.classList.add('play');
    background.classList.remove('play');

    expect(
      background.classList.contains('play')).toBe(false);

  });

});

