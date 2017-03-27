export default function(spec) {

  spec.describe('Home Scene', function() {

    spec.it('filters the list by search input', async function() {
      await spec.press('navigate.settings');
    });

  });

  // spec.describe('Tapping on an employee', function() {

  //   spec.it('shows a button to email them', async function() {
  //     await spec.fillIn('SearchBar.TextInput', 'Amy');
  //     await spec.press('EmployeeListItem.AmyTaylor');
  //     await spec.pause(1000);
  //     await spec.exists('ActionBar.EmailButton');
  //   });

  // });

}
