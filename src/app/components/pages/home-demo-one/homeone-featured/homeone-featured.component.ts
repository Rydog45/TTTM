import { Component, OnInit } from '@angular/core';
import { episodesList } from 'src/utils/episodes';

@Component({
  selector: 'app-homeone-featured',
  templateUrl: './homeone-featured.component.html',
  styleUrls: ['./homeone-featured.component.scss']
})
export class HomeoneFeaturedComponent implements OnInit {

  constructor() { }
  featuredEpisode = episodesList[2];
  ngOnInit(): void {
  }

}
