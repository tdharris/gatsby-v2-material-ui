module.exports = {
    title: 'My App',
    titleAlt: '',
    logo: '',
    url: 'http://localhost',
    description: 'This is a test app',
    ogSiteName: 'sub.mydomain.com', // OpenGraph tag for social sharing
    ogImage: '',
    userTwitter: '',
    googleAnalyticsID: process.env.GA_TRACKING_ID,
    copyright: 'Copyright © 2018. My App',
    muiTheme: {
        palette: {
            primary: {
                light: '#757de8',
                main: '#3f51b5',
                dark: '#002984',
                contrastText: '#fff'
            },
            secondary: {
                light: '#d05ce3',
                main: '#9c27b0',
                dark: '#6a0080',
                contrastText: '#fff'
            }
        }
    }
}
