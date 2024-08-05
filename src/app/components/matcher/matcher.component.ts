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
    dry: "assets/dry-skin.png",
    oily: "assets/oily-skin.png",
    combination: 'assets/combination-skin.png',
    normal: 'assets/normal-skin.png',
    sensitive: 'assets/sensitive-skin.png'
  };
  defaultImage = 'assets/logo.png';
  skinTypeDescriptions = {
    dry: 'Description for dry skin',
    oily: 'Description for oily skin',
    combination: 'Description for combination skin',
    normal: 'Description for normal skin',
    sensitive: 'Description for sensitive skin'
  };

  onSkinTypeSelected(skinType: string){
    this.selectedSkinType = skinType
  }
}
