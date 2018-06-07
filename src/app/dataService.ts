import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  itemLive = [
    {
      id: 1,
      cover: '../../assets/img/cover_2.jpg',
      thumbnail: './assets/img/slider_2.jpg',
      title: 'The Hitmans Bodyguard (2017)',
      genre: 'Action, Adventure, Fantasy',
      director: 'The worlds top bodyguard gets a new client, a hit man who must testify at the International Court of Justice',
      imdb: 9.2,
      description: 'The worlds top bodyguard gets a new client, a hit man who must testify at the International Court of Justice',
      about: 'R | 1h 58min | Action, Comedy | 18 August 2017 (USA) ',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli'
        },
        {
          id: 2,
          name: 'cavea mall'
        },
        {
          id: 3,
          name: 'cavea galleria'
        }
      ]
    },
    {
      id: 2,
      cover: '../../assets/img/cover_1.jpg',
      thumbnail: './assets/img/slider_1.jpg',
      title: 'AVENGERS: INFINITY WAR',
      genre: 'Action, Adventure, Fantasy',
      director: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      imdb: 9.2,
      description: 'of devastation and ruin puts an end to the universe.',
      about: 'Karen Gillan, Josh Brolin, Letitia Wright, Chris Evans, Elizabeth Olsen, Scarlett Johansson, Chadwick Boseman, Chris Hemsworth',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli',
        },
        {
          id: 2,
          name: 'cavea mall',
        },
        {
          id: 3,
          name: 'cavea galleria',
        }
      ]
    },
    {
      id: 3,
      cover: '../../assets/img/cover_3.png',
      thumbnail: 'https://static0.cbrimages.com/wp-content/uploads/2018/03/deadpool-2-international-poster-annoys.jpg',
      title: 'AVENGERS: INFINITY WAR',
      genre: 'Action, Adventure, Fantasy',
      director: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      imdb: 9.2,
      description: 'of devastation and ruin puts an end to the universe.',
      about: 'Karen Gillan, Josh Brolin, Letitia Wright, Chris Evans, Elizabeth Olsen, Scarlett Johansson, Chadwick Boseman, Chris Hemsworth',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli',
        },
        {
          id: 2,
          name: 'cavea mall',
        },
        {
          id: 3,
          name: 'cavea galleria',
        }
      ]
    },
    {
      id: 4,
      cover: '../../assets/img/cover_4.jpg',
      thumbnail: 'https://d-nm.ppstatic.pl/k/r/a9/09/5892fd2ed4eb2_o.jpg?1486028443',
      title: 'AVENGERS: INFINITY WAR',
      genre: 'Action, Adventure, Fantasy',
      director: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      imdb: 9.2,
      description: 'of devastation and ruin puts an end to the universe.',
      about: 'Karen Gillan, Josh Brolin, Letitia Wright, Chris Evans, Elizabeth Olsen, Scarlett Johansson, Chadwick Boseman, Chris Hemsworth',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli',
        },
        {
          id: 2,
          name: 'cavea mall',
        },
        {
          id: 3,
          name: 'cavea galleria',
        }
      ]
    },
    {
      id: 5,
      cover: '../../assets/img/cover_5.jpg',
      thumbnail: 'https://wallpapersite.com/images/pages/pic_w/2361.jpg',
      title: 'AVENGERS: INFINITY WAR',
      genre: 'Action, Adventure, Fantasy',
      director: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      imdb: 9.2,
      description: 'of devastation and ruin puts an end to the universe.',
      about: 'Karen Gillan, Josh Brolin, Letitia Wright, Chris Evans, Elizabeth Olsen, Scarlett Johansson, Chadwick Boseman, Chris Hemsworth',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli',
        },
        {
          id: 2,
          name: 'cavea mall',
        },
        {
          id: 3,
          name: 'cavea galleria',
        }
      ]
    },
    {
      id: 6,
      cover: '../../assets/img/cover_3.png',
      thumbnail: 'https://images7.alphacoders.com/335/335115.jpg',
      title: 'AVENGERS: INFINITY WAR',
      genre: 'Action, Adventure, Fantasy',
      director: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
      imdb: 9.2,
      description: 'of devastation and ruin puts an end to the universe.',
      about: 'Karen Gillan, Josh Brolin, Letitia Wright, Chris Evans, Elizabeth Olsen, Scarlett Johansson, Chadwick Boseman, Chris Hemsworth',
      start_time: '',
      end_time: '',
      tags: [
        {
          id: 1,
          name: 'Rustaveli',
        },
        {
          id: 2,
          name: 'cavea mall',
        },
        {
          id: 3,
          name: 'cavea galleria',
        }
      ]
    }
  ];

  createDateAsUTC(date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
  }


  monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  urlGenerator(curTime, cinema, show) {
    return 'curTime=' + curTime + '&cinema=' + cinema + '&show=' + show;
  }

  constructor(public router: Router, private http: Http , public route: ActivatedRoute) {
    this.Items('hall', 'hall', false, false, false);
    this.Items('movie', 'movie', false, false, false);
  }

  baseServer = 'http://localhost:3000/';

  dropItemCinema = [];
  hall = [];
  allitem = [];
  item = [];
  sliderContent = [];
  itemCarusel = [];
  show = [];
  dateList = [];
  timeList = [];

  getServer(data) {
    return this.http.get(this.baseServer + data);
  }

  slider() {
    this.sliderContent = [];
    this.allitem.forEach(e => {
      if (e.slider === true) {
        this.sliderContent.push(e);
      }
    });
  }

  cominSoon() {
    this.itemCarusel = [];
    this.allitem.forEach(e => {
      if (e.status === false) {
        this.itemCarusel.push(e);
      }
    });
  }

  itemlist() {
    this.item = [];
    this.show[0].show.forEach(e => {
      this.item.push(e);
    })
  }

  datelist() {
    this.dateList = [];
    let activeDate = true;
    this.show[0].date.forEach(e => {
      // console.log(this.createDateAsUTC(new Date(this.show[0].time)));
      // console.log(new Date(this.show[0].time));

      if (new Date(this.show[0].time).getDate() === new Date(e).getDate()) {
        activeDate = true;
      }
      else {
        activeDate = false;
      }
      this.dateList.push({
        name: new Date(e).getDate() + ' ' + this.monthNamesShort[new Date(e).getMonth()],
        time: e,
        active: activeDate
      })
    });

  }

  timelist() {
    this.timeList = [{
      name: 'all',
      active: true
    }];
    this.show[0].show.forEach(e => {
      this.timeList.push({
        name: new Date(e.time).getHours() + ' : ' + new Date(e.time).getMinutes(),
        time: e,
      })
    });
  }

  cinemalist() {
    this.dropItemCinema = [{
      name: 'all',
      active: true
    }];
    this.show[0].show.forEach(e => {
      this.dropItemCinema.push({
        id: e.cinema._id,
        name: e.cinema.name
      })
    });
  }


  // detailitem variables


  itemDetail = [];
  sliderDetail = [];
  hallDetail = [];
  cinemaDetail = [];
  showDetail = [];

  // detailitem variables end

//get items END
  Items(schima, type, dayChange, cinemaChange, totalLoad) {
    this.getServer(schima)
      .subscribe((result) => {
          if (type === 'derailItem') {
            // detailitem variables

            this.itemDetail = [];
            this.sliderDetail = [];
            this.hallDetail = [];
            this.showDetail  = [];

            this.cinemaDetail =[];
            // detailitem variables end

            this.itemDetail.push(result.json());


            this.sliderDetail.push(this.itemDetail[0].item);
            this.hallDetail = this.itemDetail[0].activeshow[0].hall;
            this.hallDetail["row"] = Object.keys(this.itemDetail[0].activeshow[0].hall.hall[0]);

            // დეტალურის დრო



            this.itemDetail[0].cinema.forEach(e => {
              let status = false ;
              if (e._id === this.itemDetail[0].activeshow[0].cinemaId._id) {
                status = true
              }

              this.cinemaDetail.push({
                id: e._id,
                name: e.name,
                active: status
              })
            });
            // დეტალურის დრო end

            this.itemDetail[0].show.forEach(e => {
              let status = false ;

              console.log(e.id, this.itemDetail[0].activeshow[0].id);

              if (e.id == this.itemDetail[0].activeshow[0].id) {
                status = true
              }

              this.showDetail.push({
                name: new Date(e.starttime).getHours() + ' : ' + new Date(e.starttime).getMinutes(),
                time: e,
                active: status
              })
            });
            console.log(this.showDetail[0]);

          } else if (type === 'show') {
            this.show = [];
            this.show.push(result.json());
            this.itemlist();
            if (cinemaChange) {
              this.timelist();
            }
            if (dayChange) {
              this.cinemalist();
            }
            if (totalLoad) {
              this.datelist();
            }
          } else {
            result.json().map((res) => {
              switch (type) {
                case 'movie':
                  this.allitem.push(res);
                  this.slider();
                  this.cominSoon();
                  break;
                case 'hall':
                  this.hall = res;
                  this.hall["row"] = Object.keys(res.hall[0]);
                  break;
              }
            });
          }
        },
        err => {
          return err;
        });
  }
}
