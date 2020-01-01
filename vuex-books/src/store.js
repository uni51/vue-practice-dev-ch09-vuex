import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOK } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [
      {
        isbn: '978-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000
      },
      {
        isbn: '978-4-7981-5757-3',
        title: 'JavaScript逆引きレシピ',
        price: 2800
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '3ステップでしっかり学ぶ Python 入門',
        price: 2480
      },
      {
        isbn: '978-4-7981-5382-7',
        title: '独習C# 新版',
        price: 3600
      },
      {
        isbn: '978-4-8399-6644-7',
        title: 'たのしいラズパイ電子工作ブック',
        price: 1900
      },
    ]
  },
  getters: {
    // 書籍件数を取得
    booksCount(state) {
      return state.books.length
    },
    // 指定された価格price未満の書籍情報を取得
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    },
  },
  mutations: {
    // addBook(state, payload) {
    //   state.books.push(payload.book)
    // }
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book)
    }   
  },
  actions: {
    addAsync(context, payload) {
      // 5000ミリ秒後にミューテーション（ADD_BOOK）をコミット
      setTimeout(function() {
        context.commit(ADD_BOOK, payload)
      }, 5000)
    }
    
    /*
    // ES2015の分割代入を利用した場合
    addAsync({ commit }, payload) {
      setTimeout(function() {
        commit(ADD_BOOK, payload)
      }, 5000);
    }
    */    
  }
})
