
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;

}

export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Be Impromptu!',  icon:'bubble_chart', class: '' },
    { path: 'newsfeed', title: 'NewsFeed',  icon: 'dashboard', class: '' },
    { path: 'events', title: 'Events',  icon:'event_available', class: '' },
    { path: 'messages', title: 'Messages',  icon:'question_answer', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'settings', title: 'Settings',  icon:'settings', class: '' }
];
