import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-single-episode-page',
    templateUrl: './single-episode-page.component.html',
    styleUrls: ['./single-episode-page.component.scss']
})
export class SingleEpisodePageComponent implements OnInit {

    constructor(public router: Router) {
      //@ts-ignore
      this.episode = router.getCurrentNavigation().extras.state.episode;
    }
    episode;
    autoplay = true;
    ngOnInit(): void {
    }
}
