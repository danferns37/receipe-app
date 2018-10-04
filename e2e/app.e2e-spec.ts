import { RecipeAppPage } from './app.po';

describe('recipe-app App', () => {
  let page: RecipeAppPage;

  beforeEach(() => {
    page = new RecipeAppPage();
  });

  it('should be able to manage and add details and delete same details in a recipe', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('app works!');
    page.manageadddeleterecipe();
  });



  it('should be able to manage and update details in a recipe', () => {
    page.navigateTo();
   
    page.manageupdaterecipe();
  });


  it('should be able to add details  and clear details in a recipe', () => {
    page.navigateTo();
    
    page.manageclearrecipedetails();
  });

});
