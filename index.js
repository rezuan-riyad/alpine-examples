/**
 * Alpine JS Learning
 */

console.log('From Index JS')


// Alpine store
document.addEventListener('alpine:init', () => {

  Alpine.store('navs', {
    items: [
      { id: 1, title: 'counter', show: false },
      { id: 2, title: 'search', show: false },
      { id: 3, title: 'todo', show: true }
    ],
    navHandler(item) {
      console.log(this.items)
      this.items = this.items.map(it => {
        if (it.id === item.id) {
          it.show = true
        } else {
          it.show = false
        }
        return it;
      })
    }
  })


  Alpine.store('todoStore', {
    title: 'Riyad',
    desc: '',
    todos: [
      {
        id: 1,
        title: 'Going To Hospital',
        done: true,
        desc: 'Full body checkup at Popular Hosiptal, Dhaka Branch.'
      },
      {
        id: 2,
        title: 'Learning Alpine JS',
        done: false,
        desc: 'Following docs build a blog site.'
      }
    ],


    // init() {
    //   Alpine.effect(() => {
    //     console.log(this.title);
    //     console.log(this.desc);
    //     console.log(this.todos)
    //   })
    // },
    addTodo() {
      let uid = window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
      console.log('CLICKED')
      console.log(this.todos);
      console.log(this.title);
      console.log(this.desc)
      let tmp = {
        id: 3,
        title: 'New Title',
        desc: 'New Desc',
        done: false
      }
      // console.log(this.todos)
      this.todos = this.todos.push(tmp);
      // console.log(this.todos)
    }
  })
})
