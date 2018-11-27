// Всего вопросов
const QUESTIONS = 10;

const initialState = {
  level: 0,
  lives: 3,
  time: 300000,
  questions: [
    {
      title: `Выберите инди-рок треки`,
      answers: [
        {
          artist: `Kevin MacLeod`,
          name: `Long Stroll`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
          genre: `Jazz`
        },
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        }
      ]
    },
    {
      title: `Выберите инди-рок треки`,
      answers: [
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        {
          artist: `Jingle Punks`,
          name: `Lucky Day`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
          genre: `Pop`
        }
      ]
    },
    {
      title: `Выберите инди-рок треки`,
      answers: [
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        {
          artist: `Jingle Punks`,
          name: `Lucky Day`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
          genre: `Pop`
        },
        {
          artist: `Quincas Moreira`,
          name: `Firefly`,
          image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
          genre: `Electronic`
        }
      ]
    },
    {
      title: `Выберите инди-рок треки`,
      answers: [
        {
          artist: `Kevin MacLeod`,
          name: `Long Stroll`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
          genre: `Jazz`
        },
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        }
      ]
    },
    {
      title: `Выберите инди-рок треки`,
      answers: [
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        {
          artist: `Jingle Punks`,
          name: `Lucky Day`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
          genre: `Pop`
        }
      ]
    },

    // Вопросы для игры второго типа

    {
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          artist: `Kevin MacLeod`,
          name: `Long Stroll`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
          genre: `Jazz`
        },
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        }
      ]
    },
    {
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        }
      ]
    },
    {
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        {
          artist: `Jingle Punks`,
          name: `Lucky Day`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
          genre: `Pop`
        }
      ]
    },
    {
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        {
          artist: `Jingle Punks`,
          name: `Lucky Day`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
          genre: `Pop`
        },
        {
          artist: `Quincas Moreira`,
          name: `Firefly`,
          image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
          genre: `Electronic`
        }
      ]
    },
    {
      title: `Кто исполняет эту песню?`,
      answers: [
        {
          artist: `Kevin MacLeod`,
          name: `Long Stroll`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
          genre: `Jazz`
        },
        {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        }
      ]
    }
  ]
};

export default initialState;
