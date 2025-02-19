export const ROUTES = {
  HOME: '',
  MEDITATION: {
    ROOT: 'meditation',
    LIBRARY: 'meditation/library',
  },
  YIN_STYLE_YOGA: {
    ROOT: 'yin-style-yoga',
    LIBRARY: 'yin-style-yoga/library',
    ROUTINES_OVERVIEW: 'yin-style-yoga/routines-overview',
    ROUTINE: 'yin-style-yoga/routine/:slug',
  },
  BREATHWORK: {
    ROOT: 'breathwork',
    LIBRARY: 'breathwork/library',
    ROUTINES_OVERVIEW: 'breathwork/routines-overview',
    ROUTINE: 'breathwork/routine/:slug',
  },
  NOT_FOUND: '**',
};
