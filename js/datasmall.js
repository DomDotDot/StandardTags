
const tagsData = {
    tags: [

        // id: $number$
            // only include ids to master and slave tags

        // name: $string$
            // tag name

        // description: $string$
            // tag desc

        // category: $string$
            // tag category

        // status: $number$
            // 1: normal, 2: extreme, 3: obsolete

        // comment: $string$
            // tag comments 
        // comment: null
            // for no comments 

        // aliases: [$string$]
            // for no comments 

        // slaveTags: [%id%]
            // only for master tags


      {
          id: 1,
          name: "age-difference",
          description: "Characters of significantly different ages are involved.",
          category: "Kinks",
          status: 2,
          aliases: ['age'],
          slaveTags: ['dilf', 'milf']
      },
      {
        id: 2,
          name: "dilf",
          description: "A 'Dad I'd Like to F***'.",
          category: "Kinks",
          status: 1,
          aliases: ['dad', 'daddy'],
      },
      {
        id: 3,
          name: "milf",
          description: "A 'Mom I'd Like to F***'.",
          category: "Kinks",
          status: 1,
          aliases: ['mom', 'mommy'],
          comment: "test"
      },
      {
        id: 4,
          name: "test",
          description: "A 'Mom I'd Like to F***'.",
          category: "Kinks",
          status: 3,
          aliases: ['mom', 'mommy'],
      },
    // ... other tags

 ]
};
