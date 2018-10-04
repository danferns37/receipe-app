import { browser, element, by } from 'protractor';

export class RecipeAppPage {
  navigateTo() {
    return browser.get('https://receipe-app.herokuapp.com/recipes');
  }

  manageadddeleterecipe(){
    element(by.xpath("//h4[text()='Chinese Chicken']/ancestor::div[2]/div[1]")).click();
    element(by.partialButtonText("Manage Recipes")).click();
    element(by.partialButtonText("Add to shopping List")).click();
   element(by.id("name")).sendKeys("Salad");
   element(by.id("amount")).sendKeys("4");
   element(by.buttonText("Add")).click();
   element(by.xpath("//a[contains(text(),'Salad')]")).click();
   element(by.buttonText("Delete")).click();
 
  }
 
 
 
  manageclearrecipedetails(){
   element(by.xpath("//h4[text()='Chinese Chicken']/ancestor::div[2]/div[1]")).click();
    element(by.partialButtonText("Manage Recipes")).click();
    element(by.partialButtonText("Add to shopping List")).click();
   element(by.id("name")).sendKeys("Salad");
   element(by.id("amount")).sendKeys("4");
   element(by.buttonText("Clear")).click();
 
 
 }
 
  manageupdaterecipe(){
   element(by.xpath("//h4[text()='Chinese Chicken']/ancestor::div[2]/div[1]")).click();
   element(by.partialButtonText("Manage Recipes")).click();
   element(by.partialButtonText("Add to shopping List")).click();
   element(by.xpath("//a[contains(text(),'Chicken Portions')]")).click();
   element(by.id("name")).clear();
   element(by.id("name")).sendKeys("Chicken Portions_Half");
   element(by.id("amount")).clear();
   element(by.id("amount")).sendKeys("5");
   element(by.buttonText("Update")).click();
 
 
 }
 
}
