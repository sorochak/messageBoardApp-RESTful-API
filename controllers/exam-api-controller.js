
// GET Request Handler
export const getAllLabs = (req, res) => {
    try  {
        res.status(200).json(labs);
    } catch(err) {
        res.status(400).send('Bad Request');
    }
    
  };

const labs = [
    { id: 0, labNo: 1, labTopic: 'ICS Review: A Message Board SPA' },
    { id: 1, labNo: 2, labTopic: 'Porting Your MB SPA to Next.js and Adding a Form' },
    { id: 2, labNo: 3, labTopic: 'Designing a RESTful API for the Message Board App' },
];

