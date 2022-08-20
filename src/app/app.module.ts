import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { LightgalleryModule } from 'lightgallery/angular';
import { AccordionModule } from "ngx-accordion";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FeaturedShowsComponent } from './components/common/featured-shows/featured-shows.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LatestEpisodesComponent } from './components/common/latest-episodes/latest-episodes.component';
import { MostPopularComponent } from './components/common/most-popular/most-popular.component';
import { OurHostsComponent } from './components/common/our-hosts/our-hosts.component';
import { OurSponsorsComponent } from './components/common/our-sponsors/our-sponsors.component';
import { ProductsComponent } from './components/common/products/products.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { SupportOurChannelComponent } from './components/common/support-our-channel/support-our-channel.component';
import { TestimonialsComponent } from './components/common/testimonials/testimonials.component';
import { MustWatchEpisodesComponent } from './components/common/must-watch-episodes/must-watch-episodes.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { TermsOfServicePageComponent } from './components/pages/terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { OurHostsPageComponent } from './components/pages/our-hosts-page/our-hosts-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ShopPageComponent } from './components/pages/shop-page/shop-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { SeasonListPageComponent } from './components/pages/season-list-page/season-list-page.component';
import { SingleSeasonPageComponent } from './components/pages/single-season-page/single-season-page.component';
import { EpisodeListPageComponent } from './components/pages/episode-list-page/episode-list-page.component';
import { SingleEpisodePageComponent } from './components/pages/single-episode-page/single-episode-page.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { VideoEpisodesComponent } from './components/common/video-episodes/video-episodes.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { SingleVideoEpisodePageComponent } from './components/pages/single-video-episode-page/single-video-episode-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeDemoOneComponent,
		HomeoneBannerComponent,
		HomeDemoTwoComponent,
		HometwoBannerComponent,
		HomeDemoThreeComponent,
		HomethreeBannerComponent,
		HomeDemoFourComponent,
		HomefourBannerComponent,
		NavbarComponent,
		BlogComponent,
		FeaturedShowsComponent,
		FooterComponent,
		LatestEpisodesComponent,
		MostPopularComponent,
		OurHostsComponent,
		OurSponsorsComponent,
		ProductsComponent,
		SubscribeComponent,
		SupportOurChannelComponent,
		TestimonialsComponent,
  		MustWatchEpisodesComponent,
		ContactPageComponent,
		NotFoundComponent,
		GalleryPageComponent,
		TermsOfServicePageComponent,
		PrivacyPolicyPageComponent,
		OurHostsPageComponent,
		AboutPageComponent,
		BlogPageComponent,
		BlogDetailsPageComponent,
		SignInPageComponent,
		SignUpPageComponent,
  FaqPageComponent,
  ShopPageComponent,
  CartPageComponent,
  CheckoutPageComponent,
  ProductDetailsPageComponent,
  SeasonListPageComponent,
  SingleSeasonPageComponent,
  EpisodeListPageComponent,
  SingleEpisodePageComponent,
  HomeDemoFiveComponent,
  VideoEpisodesComponent,
  HomefiveBannerComponent,
  SingleVideoEpisodePageComponent,
	],
	imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        StickyNavModule,
        NgxScrollTopModule,
		NgxAudioPlayerModule,
		LightgalleryModule,
		AccordionModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }