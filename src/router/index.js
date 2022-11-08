import Vue from 'vue'
import Router from 'vue-router'
import NewsPage from '@/components/NewsPage'
import LeftMenu from '@/components/menu/LeftMenu'
import RightMenu from '@/components/menu/RightMenu'
import CommonInformationPage from "@/components/CommonInformationPage";
import StructurePage from "@/components/StructurePage";
import DocumentsPage from "@/components/DocumentsPage";
import EducationPage from "@/components/EducationPage";
import EducationalStandardsPage from "@/components/EducationalStandardsPage";
import PersonalPage from "@/components/PersonalPage";
import VacanciesPage from "@/components/VacanciesPage";
import TouristRoutesPage from "@/components/TouristRoutesPage";
import MuseumAboutEducationPage from "@/components/MuseumAboutEducationPage";
import LocalHistoryPage from "@/components/LocalHistoryPage";
import ChildrensTourismPage from "@/components/ChildrensTourismPage";
import TripsPage from "@/components/TripsPage";
import TripPage from "@/components/TripPage";
import ChildrenRoutesPage from "@/components/ChildrenRoutesPage";
import ChildrenRoutePage from "@/components/ChildrenRoutePage";
import HostelPage from "@/components/HostelPage";
import PlansPage from "@/components/PlansPage";
import ResultsPage from "@/components/ResultsPage";
import PublicationPage from "@/components/PublicationPage";
import GalleryPage from "@/components/GalleryPage";
import MethLibraryPage from "@/components/MethLibraryPage";
import AntiCorruptionPage from "@/components/AntiCorruptionPage";
import ContactsPage from "@/components/ContactsPage";
import StipendsPage from "@/components/StipendsPage";
import MaterialTechProvisionPage from "@/components/MaterialTechProvisionPage";
import PaidEducationServicesPage from "@/components/PaidEducationServicesPage";
import DistanceLearningPage from "@/components/DistanceLearningPage";
import ForPupilsPage from "@/components/ForPupilsPage";
import FinancialEconomicActivityPage from "@/components/FinancialEconomicActivityPage";
import AccessibleEnvironmentPage from "@/components/AccessibleEnvironmentPage";
import InternationalCooperationPage from "@/components/InternationalCooperationPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NewsPage',
      component: NewsPage
    },
    // {
    //   path: '/left',
    //   name: 'LeftMenu',
    //   component: LeftMenu
    // },
    // {
    //   path: '/right',
    //   name: 'RightMenu',
    //   component: RightMenu
    // },
    {
      path: '/common-information',
      name: 'CommonInformationPage',
      component: CommonInformationPage
    },
    {
      path: '/structure',
      name: 'StructurePage',
      component: StructurePage
    },
    {
      path: '/documents',
      name: 'DocumentsPage',
      component: DocumentsPage
    },
    {
      path: '/education',
      name: 'EducationPage',
      component: EducationPage
    },
    {
      path: '/educational-standards',
      name: 'EducationalStandardsPage',
      component: EducationalStandardsPage
    },
    {
      path: '/personal',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/material-tech-provision',
      name: 'MaterialTechProvisionPage',
      component: MaterialTechProvisionPage
    },
    {
      path: '/stipends',
      name: 'StipendsPage',
      component: StipendsPage
    },
    {
      path: '/vacancies',
      name: 'VacanciesPage',
      component: VacanciesPage
    },
    {
      path: '/paid-education-services',
      name: 'PaidEducationServicesPage',
      component: PaidEducationServicesPage
    },
    {
      path: '/financial-economic-activity',
      name: 'FinancialEconomicActivityPage',
      component: FinancialEconomicActivityPage
    },
    {
      path: '/distance-learning',
      name: 'DistanceLearningPage',
      component: DistanceLearningPage
    },
    {
      path: '/for-pupils',
      name: 'ForPupilsPage',
      component: ForPupilsPage
    },
    {
      path: '/tourist-routes',
      name: 'TouristRoutesPage',
      component: TouristRoutesPage
    },
    {
      path: '/museum-about-education',
      name: 'MuseumAboutEducationPage',
      component: MuseumAboutEducationPage
    },
    {
      path: '/local-history',
      name: 'LocalHistoryPage',
      component: LocalHistoryPage
    },
    {
      path: '/childrens-tourism',
      name: 'ChildrensTourismPage',
      component: ChildrensTourismPage
    },
    {
      path: '/trips',
      name: 'TripsPage',
      component: TripsPage
    },
    {
      path: '/trips/:id',
      name: 'TripPage',
      component: TripPage
    },
    {
      path: '/children-routes',
      name: 'ChildrenRoutesPage',
      component: ChildrenRoutesPage,
      children: [
        {
          path: ':id',
          component: ChildrenRoutePage
        }
      ]
    },
    // {
    //   path: '/trips/:id',
    //   name: 'TripPage',
    //   component: TripPage
    // },
    {
      path: '/hostel',
      name: 'HostelPage',
      component: HostelPage
    },
    {
      path: '/plans',
      name: 'PlansPage',
      component: PlansPage
    },
    {
      path: '/results',
      name: 'ResultsPage',
      component: ResultsPage
    },
    {
      path: '/publications',
      name: 'PublicationPage',
      component: PublicationPage
    },
    // {
    //   path: '/gallery',
    //   name: 'GalleryPage',
    //   component: GalleryPage
    // },
    {
      path: '/meth-library',
      name: 'MethLibraryPage',
      component: MethLibraryPage
    },
    {
      path: '/anti-corruption',
      name: 'AntiCorruptionPage',
      component: AntiCorruptionPage
    },
    {
      path: '/contacts',
      name: 'ContactsPage',
      component: ContactsPage
    },
    {
      path: '/accessible-environment',
      name: 'AccessibleEnvironmentPage',
      component: AccessibleEnvironmentPage
    },
    {
      path: '/international-cooperation',
      name: 'InternationalCooperationPage',
      component: InternationalCooperationPage
    },
  ]
})
