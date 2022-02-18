// GET Request Handler
const getAllMessages = (req, res) => {
    try{
        res.status(200).json(messages);
    } catch(err) {
        res.status(400).send('Bad Request');
    }
  };

  // POST Request Handler
  const addNewMessage = async (req, res) => {
    res.status(200).send('Successful API POST Request');
  };

  const messages = [
    {
        id: 0,
        name: "Bill",
        msgText: "I don't know. Philosophize with him!",
    },
    {
        id: 1,
        name: "Ted",
        msgText: "All we are is dust in the wind, dude.",
    },
    {
        id: 2,
        name: "Soldier",
        msgText: "Are you suggesting coconuts migrate?",
    },
    {
        id: 3,
        name: "The Black Knight",
        msgText: "Just a flesh wound.",
    },
    {
        id: 4,
        name: "God",
        msgText: "Course it's a good idea!",
    },
    {
        id: 5,
        name: "Hunter S. Thompson",
        msgText: "Too weird to live, too rare to die!",
    },
];

  export { getAllMessages, addNewMessage };