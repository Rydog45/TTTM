import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import {ActivatedRoute} from "@angular/router";
import { episodesList } from 'src/utils/episodes';

@Component({
    selector: 'app-single-episode-page',
    templateUrl: './single-episode-page.component.html',
    styleUrls: ['./single-episode-page.component.scss']
})
export class SingleEpisodePageComponent implements OnInit {

  episode: any = null;
  constructor(private route: ActivatedRoute) {
    // console.log(activeRoute.params.value.id, "Route params -- ");
    // //@ts-ignore
    // this.episode = router.getCurrentNavigation().extras.state && router.getCurrentNavigation().extras.state.episode;
    // if (!this.episode) {
    //   //@ts-ignore
      // this.episode = episodesList.find(o => o.title.split(' ').join('-').toLowerCase() === activeRoute.params.value.id);
    //   //@ts-ignore
    //   this.router.navigate(["episode/" + activeRoute.params.value.id]);
    // }
  }
  episodeId = "";
  autoplay = true;
  ngOnInit(): void {
    //@ts-ignore
    this.episode = episodesList.find(o => o.title.split(' ').join('-').toLowerCase() === this.route.snapshot.params.id);
    this.episodeId = this.episode.title
  }
}
