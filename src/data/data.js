import fotoAlice from '../image/alice.jpg'
import fotoBarella from '../image/barella.jpeg'
import fotoJosefina from '../image/josefina.jpg'

const contacts = [
  {
    id: 0,
    active: true,
    name: "Alice Freeman",
    image: fotoAlice,
    messages: [
      {
        id: "A1",
        myMessage: false,
        messageText: "Hi, how are you?",
        date: 1661535228385
      },
      {
        id: "A2",
        myMessage: true,
        messageText: "I'm fine, and you?",
        date: 1661535328385
      },
      {
        id: "A3",
        myMessage: false,
        messageText: "I'm fine, too. I'm working now",
        date: 1661535428385
      }
    ]
  },
  {
    id: 1,
    active: true,
    name: "Barella",
    image: fotoBarella,
    messages: [
      {
        id: "B1",
        myMessage: false,
        messageText: "Hi, where are you?",
        date: 1661435428385
      },
      {
        id: "B2",
        myMessage: true,
        messageText: "Hi, I'm at home",
        date: 1661435428385
      }
    ]
  },
  {
    id: 2,
    name: "Marta",
    active: false,
    image: fotoJosefina,
    messages: [
      {
        id: "M1",
        myMessage: false,
        messageText: "Hi, are you ready?",
        date: 1661425428385
      },
      {
        id: "M2",
        myMessage: true,
        messageText: "I'm not sure",
        date: 1661425428385
      }
    ]
  }
]

export default contacts;