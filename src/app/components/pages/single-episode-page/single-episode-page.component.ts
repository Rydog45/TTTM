import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import {ActivatedRoute, Router} from "@angular/router";
import { episodesList } from 'src/utils/episodes';

@Component({
    selector: 'app-single-episode-page',
    templateUrl: './single-episode-page.component.html',
    styleUrls: ['./single-episode-page.component.scss']
})
export class SingleEpisodePageComponent implements OnInit {

    constructor(public router: Router, activeRoute: ActivatedRoute) {
      //@ts-ignore
      this.episode = router.getCurrentNavigation().extras.state && router.getCurrentNavigation().extras.state.episode;
      if (!this.episode) {
        //@ts-ignore
        this.episode = episodesList.find(o => o.title.split(' ').join('-').toLowerCase() === activeRoute.params.value.id);
        //@ts-ignore
        this.router.navigate(["episode/" + activeRoute.params.value.id]);
      }
    }
    episode;
    autoplay = true;
    ngOnInit(): void {
    }
}
