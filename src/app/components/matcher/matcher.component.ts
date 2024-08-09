import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-matcher',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './matcher.component.html',
  styleUrl: './matcher.component.css'
})
export class MatcherComponent {
  selectedSkinType: string = '';
  skinTypeImages = {
    dry: 'assets/dry-skin.png',
    oily: 'assets/oily-skin.png',
    combination: 'assets/combination-skin.png',
    normal: 'assets/normal-skin.png',
    sensitive: 'assets/sensitive-skin.png'
  };
  defaultImage = 'assets/matcher-home.png';
  skinTypeDescriptions = {
    dry: 'Dry skin, often feeling tight, rough, and flaky, requires extra care. Beauty & Beasts can help you find the perfect furry friend to complement your dry skin!',
    oily: 'Oily skin is characterized by a shiny or greasy appearance due to excessive sebum production. It\'s prone to clogged pores, blackheads, and acne. Find relief and a furry companion with Beauty & Beasts!',
    combination: 'Combination skin is a tricky one! You might experience oily T-zone (forehead, nose, and chin) with dry patches on your cheeks. It\’s a balancing act. Discover your perfect furry match and find harmony with Beauty & Beasts!',
    normal: 'Normal skin is balanced, neither too oily nor too dry. It has a healthy glow, minimal pores, and few blemishes. Beauty & Beasts can help you find your ideal match!',
    sensitive: 'Sensitive skin is easily irritated, often reacting with redness, dryness, or even breakouts. It requires gentle care and products. Find a calm and gentle companion for your delicate skin!'
  };

  onSkinTypeSelected(skinType: string){
    this.selectedSkinType = skinType
  }
}
