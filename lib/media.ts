/**
 * Image slots. Every empty frame on the site has an id; to fill it, put the file in /public and
 * add the path here, e.g.  'about.culture.2': '/images/about/culture-2.jpg'
 * The suggested size is printed inside each empty frame.
 *
 * About page:  about.hero  about.story  about.leader.1..3  about.culture.1..3
 * Projects:    work.<slug>.client | work.<slug>.logo | work.<slug>.shot1..3 | work.<slug>.site.1..4 (gallery)
 *              (slugs: hmb-erp, actiwell, tna-fujikin, icommune, activesg-cms, myarms, careearth-life, casa-lsm, atms, super-bloom)
 */
export const media: Record<string, string | undefined> = {
  'about.hero': '/images/about/team-group.webp',
  'about.story': '/images/about/direction-mission.webp',
  'about.culture.1': '/images/about/team-meeting.webp',
  'about.leader.2': '/images/about/leader-ceo.webp',
  'about.leader.3': '/images/about/leader-cdo.webp',

  // Project card covers (device mockups)
  'work.hmb-erp.cover': '/images/projects/hmb-erp/cover.webp',
  'work.actiwell.cover': '/images/projects/actiwell/cover.webp',
  'work.icommune.cover': '/images/projects/icommune/cover.webp',
  'work.activesg-cms.cover': '/images/projects/activesg-cms/cover.webp',
  'work.careearth-life.cover': '/images/projects/careearth-life/cover.webp',
  'work.tna-fujikin.cover': '/images/projects/tna-fujikin/cover.webp',
  'work.myarms.cover': '/images/projects/myarms/cover.webp',
  'work.casa-lsm.cover': '/images/projects/casa-lsm/cover.webp',
  'work.atms.cover': '/images/projects/atms/cover.webp',
  'work.super-bloom.cover': '/images/projects/super-bloom/cover.webp',

  // About – Vision / Action direction
  'about.direction.1': '/images/about/direction-vision.webp',
  'about.direction.2': '/images/about/team-working.webp',
  'about.direction.3': '/images/about/direction-action.webp',

  // ActiveSG
  'work.activesg-cms.client': '/images/projects/activesg-cms/client.webp',

  // CareEarth Life
  'work.careearth-life.client': '/images/projects/careearth-life/client.webp',

  'work.careearth-life.shot1': '/images/projects/careearth-life/web-home.webp',
  'work.careearth-life.shot2': '/images/projects/careearth-life/web-profile.webp',
  'work.careearth-life.shot3': '/images/projects/careearth-life/web-notify.webp',

  // iCommune (iKienhung)
  'work.icommune.client': '/images/projects/icommune/client.webp',
  'work.icommune.shot1': '/images/projects/icommune/web-dashboard.webp',
  'work.icommune.shot2': '/images/projects/icommune/web-processing.webp',
  'work.icommune.shot3': '/images/projects/icommune/web-tdp.webp',
  'work.icommune.app.1': '/images/projects/icommune/app-1.webp',
  'work.icommune.app.2': '/images/projects/icommune/app-2.webp',
  'work.icommune.app.3': '/images/projects/icommune/app-3.webp',

  // CASA LSM
  'work.casa-lsm.logo': '/images/projects/casa-lsm/logo.webp',
  'work.casa-lsm.client': '/images/projects/casa-lsm/client.webp',
  'work.casa-lsm.shot1': '/images/projects/casa-lsm/web-teachers.webp',
  'work.casa-lsm.shot2': '/images/projects/casa-lsm/web-attendance.webp',
  'work.casa-lsm.shot3': '/images/projects/casa-lsm/web-menu.webp',
  'work.casa-lsm.app.1': '/images/projects/casa-lsm/app-1.webp',
  'work.casa-lsm.app.2': '/images/projects/casa-lsm/app-2.webp',
  'work.casa-lsm.app.3': '/images/projects/casa-lsm/app-3.webp',

  // Actiwell
  'work.actiwell.logo': '/images/projects/actiwell/logo.webp',
  'work.actiwell.client': '/images/projects/actiwell/ceremony-group.webp',
  'work.actiwell.shot1': '/images/projects/actiwell/web-report.webp',
  'work.actiwell.shot2': '/images/projects/actiwell/web-calendar.webp',
  'work.actiwell.shot3': '/images/projects/actiwell/web-desk.webp',
  'work.actiwell.shot4': '/images/projects/actiwell/web-timesheet.webp',
  'work.actiwell.app.1': '/images/projects/actiwell/app-1.webp',
  'work.actiwell.app.2': '/images/projects/actiwell/app-2.webp',
  'work.actiwell.app.3': '/images/projects/actiwell/app-3.webp',

  'work.hmb-erp.shot1': '/images/projects/hmb-erp/web-product.webp',
  'work.hmb-erp.shot2': '/images/projects/hmb-erp/web-pricelist.webp',
  'work.hmb-erp.shot3': '/images/projects/hmb-erp/web-entities.webp',

  // HMB ERP – handover with HUNMED
  'work.hmb-erp.client': '/images/projects/hmb-erp/handover.webp',

  // TNA – Fujikin
  'work.tna-fujikin.client': '/images/projects/tna-fujikin/handover.webp',
  'work.tna-fujikin.site.1': '/images/projects/tna-fujikin/cameras-entrance.webp',
  'work.tna-fujikin.site.2': '/images/projects/tna-fujikin/cameras-lunch.webp',
  'work.tna-fujikin.site.3': '/images/projects/tna-fujikin/camera-wall.webp',
  'work.tna-fujikin.shot1': '/images/projects/tna-fujikin/screen-dashboard.webp',
  'work.tna-fujikin.shot2': '/images/projects/tna-fujikin/screen-staff.webp',
  'work.tna-fujikin.shot3': '/images/projects/tna-fujikin/screen-bonus.webp',
  'work.tna-fujikin.app.1': '/images/projects/tna-fujikin/app-1.webp',
  'work.tna-fujikin.app.2': '/images/projects/tna-fujikin/app-2.webp',
  'work.tna-fujikin.app.3': '/images/projects/tna-fujikin/app-3.webp',
}

/** Optional crop focus per image (CSS object-position), e.g. keep faces in frame */
export const mediaFocus: Record<string, string> = {
  'about.hero': 'center 30%',
  'about.direction.2': 'center 35%',
  'about.culture.1': 'center 40%',
  'about.leader.2': 'center 20%',
  'about.leader.3': 'center 28%',
  'about.direction.1': 'center 60%',
  'about.direction.3': 'center 40%',
  'work.careearth-life.client': 'left 40%',
  'work.activesg-cms.client': 'center 35%',
  'work.hmb-erp.client': 'center 45%',
  'work.tna-fujikin.client': 'center 60%',
  'work.tna-fujikin.site.2': 'center 40%',
}
