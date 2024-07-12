type ProjectData = {
    title : string,
    rows : Array<ProjectDataRow>
}
type ProjectDataRow = {
    id: number,
    projectName : string,
    contribution : string,
    date : string,
    link : string,
    details : any
}

// TODO: Maybe move this stuff as well as other data to a database? Hosted SQL? Firebase?

const web_rows : ProjectData = {
    title: 'Web Dev',
    rows: [
        //{ id: 4, projectName: '-', date: '', link: '', details: '4'},
        { 
            id: 3,
            projectName: 'Portfolio',
            contribution: 'Personal Project',
            date: '2024-06',
            link: 'https://github.com/rgreenan55/RobertGreenanPortfolio',
            details: ''
        },
        {
            id: 2,
            projectName: 'House Price Predictor',
            contribution: 'Project Manager, Front End',
            date: '2023-09',
            link: 'https://github.com/rgreenan55/HousePricePredictor_FE',
            details: ''
        },
        {
            id: 1,
            projectName: 'Steam Web App',
            contribution: 'Personal Project',
            date: '2021-09',
            link: 'https://github.com/Steam-Application',
            details: ''
        },
    ]
};

const game_rows : ProjectData = {
    title: 'Game Dev',
    rows: [
        //{ id: 0, projectName: '-', contribution: 'Personal Project', date: '', link: '', details: ''},
        {
            id: 4,
            projectName: 'Breakout',
            contribution: 'Personal Project',
            date: '2024-06',
            link: 'https://github.com/rgreenan55/GodotGames/tree/master/Breakout',
            details: ''
        },
        {
            id: 3,
            projectName: 'FlappyBird',
            contribution: 'Personal Project',
            date: '2024-06', 
            link: 'https://github.com/rgreenan55/GodotGames/tree/master/FlappyBird',
            details: ''
        },
        { 
            id: 2,
            projectName: 'Pong',
            contribution: 'Personal Project',
            date: '2024-06',
            link: 'https://github.com/rgreenan55/GodotGames/tree/master/Pong',
            details: ''
        },
        {
            id: 1,
            projectName: 'Degree Dungeon',
            contribution: 'Developer',
            date: '2024-01',
            link: 'https://github.com/rgreenan55/DegreeDungeon',
            details: ''
        },
    ]
};

export const project_tabs = [
    web_rows,
    game_rows
];