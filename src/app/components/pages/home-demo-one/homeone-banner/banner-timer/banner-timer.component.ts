import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'banner-timer',
  templateUrl: './banner-timer.component.html',
  styleUrls: ['./banner-timer.component.scss'],
})
export class BannerTimerComponent implements OnInit {
  constructor() {}

  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  title: string = 'Talk Tech To Me Live In:';
  x = 0;

  // timerFunc(startCountDownDate: any) {
  //     console.log(startCountDownDate, "Start");
  //   let now = new Date().getTime();
  //   let distance = startCountDownDate.getTime() - now;
  //   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //   this.setTimer(startCountDownDate, days, hours, minutes, seconds, distance);
  // }
  // setTimer(countdownDate: any, days: any, hours: any, minutes: any, seconds: any, distance: any) {
  //   if (distance < 0) {
  //     clearInterval(this.x)
      // this.days = "0"+days;
      // this.hours = "0"+hours;
      // this.minutes = "0"+minutes;
      // this.seconds = "0"+seconds;
      // this.title = "Broadcasting Live Now!";
      // // countdownDate.setHours(0)
      // // countdownDate.setMinutes(0)
      // // countdownDate.setSeconds(0)
      // //@ts-ignore
      // this.x = setInterval(() => {
      //     this.ngOnInit()
      // }, 3600);
  //   } else {
  //   console.log("Seconds");
  //     if (days < 10) {
  //       this.days = "0"+days;
  //     } else {
  //       this.days = days;
  //     }
  //     if (hours < 10) {
  //       this.hours = "0"+hours;
  //     } else {
  //       this.hours = hours;
  //     }
  //     if (minutes < 10) {
  //       this.minutes = "0"+minutes;
  //     } else {
  //       this.minutes = minutes;
  //     }
  //     if (seconds < 10) {
  //       this.seconds = "0"+seconds;
  //     } else {
  //       this.seconds = seconds;
  //     }
  //   }
  // }
  // getDayName(dateStr: any, locale: any)
  // {
  //   let date = new Date(dateStr);
  //   return date.toLocaleDateString(locale, { weekday: 'long' });
  // }

  getTimeRemaining(endTime: any) {
    // @ts-ignore
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  initializeClock(endTime: Date) {
    const updateClock = () => {
      let t = this.getTimeRemaining(endTime);
      this.days = ('0' + t.days).slice(-2);
      this.hours = ('0' + t.hours).slice(-2);
      this.minutes = ('0' + t.minutes).slice(-2);
      this.seconds = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeInterval);
        this.days = "00";
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
        this.title = "Broadcasting Live Now!";
        //@ts-ignore
        timeInterval = setInterval(() => {
            this.ngOnInit()
        }, 3600);
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  }

  getNextSaturday(now: any) {
    // var now = new Date();
    var nextSaturday = new Date();
    nextSaturday.setDate(now.getDate() + ((6 - 1 - now.getDay() + 7) % 7) + 1);
    nextSaturday.setHours(12, 0, 0, 0);
    return nextSaturday;
  }

  convertToPST(date: Date) {
    let formattedDate = new Date(
      date.toLocaleString('en-US', {
        timeZone: 'PST',
      })
    );
    // formattedDate.setHours(10);
    // formattedDate.setMinutes(0);
    // formattedDate.setSeconds(0);
    return formattedDate;
  }

  ngOnInit(): void {
    let formattedDate = this.convertToPST(new Date());
    this.initializeClock(this.getNextSaturday(formattedDate));
    // let countDownDate = new Date()
    // countDownDate.setHours(0);
    // countDownDate.setMinutes(0);
    // countDownDate.setSeconds(0);
    // countDownDate = new Date(countDownDate.toLocaleString('en-US', {
    //   timeZone: 'America/Los_Angeles',
    // }));
    // let day = this.getDayName(countDownDate, "en-US");
    // let targetDateTime = new Date(countDownDate.setDate(countDownDate.getDate() + 7));
    // console.log("Hour less than 12", targetDateTime, countDownDate, day, countDownDate.getHours());
    // if (day === "Saturday") {
    //   if (countDownDate.getHours() < 12) {
    //     console.log("Less than 12");
    //     // let hoursDiff = 24 - 12;
    //     countDownDate.setHours(24);
    //     countDownDate.setMinutes(0);
    //     countDownDate.setSeconds(0);
    //   } else {
    //     countDownDate.setDate(countDownDate.getDate() + 8);
    //   }
    // } else if (day === "Sunday") {
    //   countDownDate.setDate(countDownDate.getDate() + 7);
    // } else if (day === "Monday") {
    //   countDownDate.setDate(countDownDate.getDate() + 6);
    // } else if (day === "Tuesday") {
    //   countDownDate.setDate(countDownDate.getDate() + 5);
    // } else if (day === "Wednesday") {
    //   countDownDate.setDate(countDownDate.getDate() + 4);
    // } else if (day === "Thursday") {
    //   countDownDate.setDate(countDownDate.getDate() + 3);
    // } else if (day === "Friday") {
    //   countDownDate.setDate(countDownDate.getDate() + 2);
    // } else {
    //   countDownDate.setDate(countDownDate.getDate() + 1);
    // }
    // this.timerFunc(countDownDate);
    // //@ts-ignore
    // this.x = setInterval(() => {
    //   this.timerFunc(countDownDate)
    // }, 1000)
  }
  ngOnDestroy() {
    if (this.x) {
      clearInterval(this.x);
    }
  }
}
