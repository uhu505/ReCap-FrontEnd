import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/modules/interface/brand';
import { Color } from 'src/app/modules/interface/color';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  brandCategories:Brand[];
  colorCategories:Color[];
  currentBrandCategory:Brand;
  currentColorCategory:Color;
  nullBrandCategory:Brand = {id:-1, brandName:""};
  nullColorCategory:Color = {id:-1, colorName:""};
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getBrandCategories();
    this.getColorCategories();
  }

  getBrandCategories(){
    this.categoryService.getBrandCategories().subscribe((response) => {
      this.currentBrandCategory = this.nullBrandCategory;
      this.brandCategories = response.data;
    });
  }

  getColorCategories(){
    this.categoryService.getColorCategories().subscribe((response) => {
      this.currentColorCategory =  this.nullColorCategory;
      this.colorCategories = response.data;
    });
  }

  setCurrentBrandCategory(brandCategory:Brand){
    this.currentBrandCategory = brandCategory;
  } 

  setCurrentColorCategory(colorCategory:Color){
    this.currentColorCategory = colorCategory;
  }

  getCurrentBrandCategoryClass(category:Brand){
    if(category == this.currentBrandCategory){
      return "list-group-item active btn"
    } else{
      return "list-group-item btn";
    }
  }

  getCurrentColorCategoryClass(category:Color){
    if(category == this.currentColorCategory){
      return "list-group-item active btn"
    } else{
      return "list-group-item btn";
    }
  }

  }


