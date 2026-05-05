import { docReady } from './utils';
import detectorInit from './detector';
import tooltipInit from './tooltip';
import popoverInit from './popover';
import toastInit from './toast';
import plyrInit from './plyr';
import initMap from './googleMap';
import countupInit from './countup';
import scrollToTop from './scroll-to-top';
import swiperInit from './swiper';
import dropdownOnHover from './dropdown-on-hover';
import scrollbarInit from './scrollbar';
import dropdownMenuInit from './dropdown-menu';
import lightboxInit from './lightbox';
import bgPlayerInit from './bg-player';
import hamburgerInit from './hamburger';
import zanimationInit from './zanimation';
import inertiaInit from './inertia';
import preloaderInit from './preloader';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);

docReady(tooltipInit);
docReady(popoverInit);
docReady(toastInit);
docReady(plyrInit);
docReady(initMap);

docReady(countupInit);
docReady(scrollToTop);

docReady(swiperInit);

docReady(dropdownOnHover);

docReady(scrollbarInit);

docReady(dropdownMenuInit);
docReady(lightboxInit);
docReady(bgPlayerInit);
docReady(hamburgerInit);
docReady(zanimationInit);
docReady(inertiaInit);
docReady(preloaderInit);
