const initialState = {
    posts : [
        {
            id: '1',
            title: 'Article 1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'Sport'
      },

        {
        id: '2',
        title: 'Article 2',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        author: 'John Doe',
        category: 'News'
      },

        {
        id: '3',
        title: 'Article 3',
        shortDescription: 'Short description of the article...',
        content: 'Main content of the article',
        publishedDate: new Date('02-02-2022'),
        author: 'John Doe',
        category: 'Sport'
      },
    ],
    categories: ['Sport', 'News', 'Movie']
};

export default initialState