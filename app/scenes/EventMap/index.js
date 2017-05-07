/**
 * @flow
 */

import React, { Component } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import Mapbox from 'react-native-mapbox-gl';
// Mapbox.setAccessToken(
//   'pk.eyJ1IjoiY3lwcnVzZ2xvYmUiLCJhIjoiejg3TndqVSJ9.YHXl8rm_IcgqrvJ-b0p8LQ'
// );

import MapView from 'react-native-maps';

import styles from './styles';

import { config } from './config';

import { theme } from '../../theme';

import BalloonImg from '../../../images/balloon.png';
import ToiletImg from '../../../images/toilet.png';
import Chainsaw from '../../../images/chainsaw.png';

class EventMap extends Component {
  static navigatorStyle = {
    ...config.navigatorStyles,
  };

  state = {
    selectedMarker: null,
    region: {
      latitude: 35.195944,
      longitude: -106.596916,
      latitudeDelta: 0.006,
      longitudeDelta: 0.006,
    },
    zoom: 14,
    annotations: [
      {
        launch_sites: [
          {
            A: [
              {
                id: 'ci3o4glaw000vepqoiwknvr83',
                title: 'Launch Location',
                subtitle: 'A5',
                type: 'point',
                coordinate: { latitude: 35.193035, longitude: -106.598676 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glav000uepqotlin104l',
                title: 'Launch Location',
                subtitle: 'A4',
                type: 'point',
                coordinate: { latitude: 35.192949, longitude: -106.598359 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glay000xepqoib2x7xty',
                title: 'Launch Location',
                subtitle: 'A7',
                type: 'point',
                coordinate: { latitude: 35.193222, longitude: -106.599306 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glax000wepqo4t8ip3rb',
                title: 'Launch Location',
                subtitle: 'A6',
                type: 'point',
                coordinate: { latitude: 35.19313, longitude: -106.598982 },
                image: 'launch_site',
              },
            ],
            B: [
              {
                id: 'ci3o4glb40011epqom0rrsi7g',
                title: 'Launch Location',
                subtitle: 'B5',
                type: 'point',
                coordinate: { latitude: 35.193351, longitude: -106.598528 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb0000yepqo0969lkpc',
                title: 'Launch Location',
                subtitle: 'B2',
                type: 'point',
                coordinate: { latitude: 35.193079, longitude: -106.597579 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb60013epqoelrjjrvp',
                title: 'Launch Location',
                subtitle: 'B7',
                type: 'point',
                coordinate: { latitude: 35.193539, longitude: -106.599163 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb80014epqot379ekvo',
                title: 'Launch Location',
                subtitle: 'B8',
                type: 'point',
                coordinate: { latitude: 35.193671, longitude: -106.599559 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb50012epqo7u2sghmn',
                title: 'Launch Location',
                subtitle: 'B6',
                type: 'point',
                coordinate: { latitude: 35.19344, longitude: -106.598839 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb20010epqor0381c4i',
                title: 'Launch Location',
                subtitle: 'B4',
                type: 'point',
                coordinate: { latitude: 35.193258, longitude: -106.598215 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb1000zepqo12vk7wgq',
                title: 'Launch Location',
                subtitle: 'B3',
                type: 'point',
                coordinate: { latitude: 35.193172, longitude: -106.597895 },
                image: 'launch_site',
              },
            ],
            C: [
              {
                id: 'ci3o4glbj001cepqoycqy6ptf',
                title: 'Launch Location',
                subtitle: 'C9',
                type: 'point',
                coordinate: { latitude: 35.194084, longitude: -106.599733 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbf0019epqow5ssf9xj',
                title: 'Launch Location',
                subtitle: 'C6',
                type: 'point',
                coordinate: { latitude: 35.193764, longitude: -106.598708 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbb0016epqo9ph3w9go',
                title: 'Launch Location',
                subtitle: 'C3',
                type: 'point',
                coordinate: { latitude: 35.193485, longitude: -106.597756 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbc0017epqonegzprla',
                title: 'Launch Location',
                subtitle: 'C4',
                type: 'point',
                coordinate: { latitude: 35.193587, longitude: -106.598073 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glb90015epqojil16fsz',
                title: 'Launch Location',
                subtitle: 'C2',
                type: 'point',
                coordinate: { latitude: 35.193393, longitude: -106.597435 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbe0018epqoctx8arcj',
                title: 'Launch Location',
                subtitle: 'C5',
                type: 'point',
                coordinate: { latitude: 35.193667, longitude: -106.598377 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbi001bepqo6hw5yp2b',
                title: 'Launch Location',
                subtitle: 'C8',
                type: 'point',
                coordinate: { latitude: 35.193979, longitude: -106.599427 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbg001aepqo44iq1fp8',
                title: 'Launch Location',
                subtitle: 'C7',
                type: 'point',
                coordinate: { latitude: 35.19387, longitude: -106.599016 },
                image: 'launch_site',
              },
            ],
            D: [
              {
                id: 'ci3o4glbo001gepqofq1qgxv7',
                title: 'Launch Location',
                subtitle: 'D5',
                type: 'point',
                coordinate: { latitude: 35.194008, longitude: -106.598242 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbt001kepqoxudp26iz',
                title: 'Launch Location',
                subtitle: 'D9',
                type: 'point',
                coordinate: { latitude: 35.1944, longitude: -106.59959 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbl001eepqowitzq7i3',
                title: 'Launch Location',
                subtitle: 'D3',
                type: 'point',
                coordinate: { latitude: 35.193809, longitude: -106.597613 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbr001jepqosu3e3yi9',
                title: 'Launch Location',
                subtitle: 'D8',
                type: 'point',
                coordinate: { latitude: 35.194315, longitude: -106.599275 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbq001iepqo6ongo49y',
                title: 'Launch Location',
                subtitle: 'D7',
                type: 'point',
                coordinate: { latitude: 35.194188, longitude: -106.598869 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbk001depqo8i5qysj0',
                title: 'Launch Location',
                subtitle: 'D2',
                type: 'point',
                coordinate: { latitude: 35.193724, longitude: -106.597292 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbn001fepqod964jygn',
                title: 'Launch Location',
                subtitle: 'D4',
                type: 'point',
                coordinate: { latitude: 35.193907, longitude: -106.597927 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbp001hepqog8c1afal',
                title: 'Launch Location',
                subtitle: 'D6',
                type: 'point',
                coordinate: { latitude: 35.194103, longitude: -106.598554 },
                image: 'launch_site',
              },
            ],
            E: [
              {
                id: 'ci3o4glby001oepqosl8vnr5p',
                title: 'Launch Location',
                subtitle: 'E4',
                type: 'point',
                coordinate: { latitude: 35.194222, longitude: -106.597779 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbv001mepqoqeulww9c',
                title: 'Launch Location',
                subtitle: 'E2',
                type: 'point',
                coordinate: { latitude: 35.194013, longitude: -106.597171 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbu001lepqomv8progf',
                title: 'Launch Location',
                subtitle: 'E1',
                type: 'point',
                coordinate: { latitude: 35.193903, longitude: -106.596759 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glc3001repqou0kymcry',
                title: 'Launch Location',
                subtitle: 'E7',
                type: 'point',
                coordinate: { latitude: 35.194508, longitude: -106.598736 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glc4001sepqohr9v93ju',
                title: 'Launch Location',
                subtitle: 'E8',
                type: 'point',
                coordinate: { latitude: 35.194639, longitude: -106.599133 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbx001nepqozfx22w5q',
                title: 'Launch Location',
                subtitle: 'E3',
                type: 'point',
                coordinate: { latitude: 35.194118, longitude: -106.59748 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glc1001qepqox4jjb8s5',
                title: 'Launch Location',
                subtitle: 'E6',
                type: 'point',
                coordinate: { latitude: 35.194427, longitude: -106.598409 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glbz001pepqo2c09a1uo',
                title: 'Launch Location',
                subtitle: 'E5',
                type: 'point',
                coordinate: { latitude: 35.194317, longitude: -106.59811 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glc6001tepqo52klc37d',
                title: 'Launch Location',
                subtitle: 'E9',
                type: 'point',
                coordinate: { latitude: 35.194725, longitude: -106.599452 },
                image: 'launch_site',
              },
            ],
            F: [
              {
                id: 'ci3o4glc7001uepqonn49uiuo',
                title: 'Launch Location',
                subtitle: 'F1',
                type: 'point',
                coordinate: { latitude: 35.194228, longitude: -106.596626 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcc001yepqoeopxhfnr',
                title: 'Launch Location',
                subtitle: 'F3',
                type: 'point',
                coordinate: { latitude: 35.194453, longitude: -106.597333 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glca001wepqouxcq9o57',
                title: 'Launch Location',
                subtitle: 'F11',
                type: 'point',
                coordinate: { latitude: 35.195241, longitude: -106.599946 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcb001xepqocxbe9rmr',
                title: 'Launch Location',
                subtitle: 'F2',
                type: 'point',
                coordinate: { latitude: 35.194358, longitude: -106.597013 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glch0022epqomtu7vfb5',
                title: 'Launch Location',
                subtitle: 'F7',
                type: 'point',
                coordinate: { latitude: 35.194828, longitude: -106.59859 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glci0023epqo9lefydkn',
                title: 'Launch Location',
                subtitle: 'F8',
                type: 'point',
                coordinate: { latitude: 35.194959, longitude: -106.598994 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcf0020epqotgybennd',
                title: 'Launch Location',
                subtitle: 'F5',
                type: 'point',
                coordinate: { latitude: 35.194634, longitude: -106.597974 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glc8001vepqol03u0be8',
                title: 'Launch Location',
                subtitle: 'F10',
                type: 'point',
                coordinate: { latitude: 35.195146, longitude: -106.599621 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcj0024epqo6v7fl6qf',
                title: 'Launch Location',
                subtitle: 'F9',
                type: 'point',
                coordinate: { latitude: 35.195048, longitude: -106.599308 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcg0021epqoidwcag4o',
                title: 'Launch Location',
                subtitle: 'F6',
                type: 'point',
                coordinate: { latitude: 35.194741, longitude: -106.598268 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glce001zepqo3sph34e7',
                title: 'Launch Location',
                subtitle: 'F4',
                type: 'point',
                coordinate: { latitude: 35.194539, longitude: -106.597642 },
                image: 'launch_site',
              },
            ],
            G: [],
            H: [
              {
                id: 'ci3o4glcz002hepqo2bhdlzh0',
                title: 'Launch Location',
                subtitle: 'H10',
                type: 'point',
                coordinate: { latitude: 35.19578, longitude: -106.599343 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld8002oepqobsb0x9rw',
                title: 'Launch Location',
                subtitle: 'H7',
                type: 'point',
                coordinate: { latitude: 35.195463, longitude: -106.598302 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld4002lepqo0cj2onjl',
                title: 'Launch Location',
                subtitle: 'H4',
                type: 'point',
                coordinate: { latitude: 35.195202, longitude: -106.597359 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld7002nepqoi6q0j392',
                title: 'Launch Location',
                subtitle: 'H6',
                type: 'point',
                coordinate: { latitude: 35.195382, longitude: -106.597994 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldb002qepqop5c4usdp',
                title: 'Launch Location',
                subtitle: 'H9',
                type: 'point',
                coordinate: { latitude: 35.195699, longitude: -106.599037 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld9002pepqo574ua2rp',
                title: 'Launch Location',
                subtitle: 'H8',
                type: 'point',
                coordinate: { latitude: 35.195601, longitude: -106.598711 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld2002jepqobxvt2yfc',
                title: 'Launch Location',
                subtitle: 'H2',
                type: 'point',
                coordinate: { latitude: 35.195009, longitude: -106.596716 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glcy002gepqoy5wa5n6k',
                title: 'Launch Location',
                subtitle: 'H1',
                type: 'point',
                coordinate: { latitude: 35.194884, longitude: -106.596316 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld5002mepqo98mms5u4',
                title: 'Launch Location',
                subtitle: 'H5',
                type: 'point',
                coordinate: { latitude: 35.195284, longitude: -106.597672 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld1002iepqoz8k6cclr',
                title: 'Launch Location',
                subtitle: 'H11',
                type: 'point',
                coordinate: { latitude: 35.195871, longitude: -106.599655 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gld3002kepqoyen2fg1n',
                title: 'Launch Location',
                subtitle: 'H3',
                type: 'point',
                coordinate: { latitude: 35.195112, longitude: -106.597042 },
                image: 'launch_site',
              },
            ],
            I: [],
            J: [
              {
                id: 'ci3o4gldq0031epqod2k5y4xc',
                title: 'Launch Location',
                subtitle: 'J9',
                type: 'point',
                coordinate: { latitude: 35.196148, longitude: -106.598835 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldk002wepqoyyzxhw44',
                title: 'Launch Location',
                subtitle: 'J4',
                type: 'point',
                coordinate: { latitude: 35.195654, longitude: -106.597158 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldf002sepqov2jgpca3',
                title: 'Launch Location',
                subtitle: 'J10',
                type: 'point',
                coordinate: { latitude: 35.19624, longitude: -106.599148 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldh002uepqop58xykoj',
                title: 'Launch Location',
                subtitle: 'J2',
                type: 'point',
                coordinate: { latitude: 35.195467, longitude: -106.59653 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldg002tepqoqu96tjit',
                title: 'Launch Location',
                subtitle: 'J11',
                type: 'point',
                coordinate: { latitude: 35.196321, longitude: -106.599461 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldp0030epqoedqbidgt',
                title: 'Launch Location',
                subtitle: 'J8',
                type: 'point',
                coordinate: { latitude: 35.196061, longitude: -106.598518 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldl002xepqo69yohpn3',
                title: 'Launch Location',
                subtitle: 'J5',
                type: 'point',
                coordinate: { latitude: 35.195747, longitude: -106.597482 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldd002repqox2cxdtrf',
                title: 'Launch Location',
                subtitle: 'J1',
                type: 'point',
                coordinate: { latitude: 35.195359, longitude: -106.596119 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldn002zepqovljqghzr',
                title: 'Launch Location',
                subtitle: 'J7',
                type: 'point',
                coordinate: { latitude: 35.195943, longitude: -106.598111 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldm002yepqohx7ixm0l',
                title: 'Launch Location',
                subtitle: 'J6',
                type: 'point',
                coordinate: { latitude: 35.195845, longitude: -106.597785 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldj002vepqos4wyqi0e',
                title: 'Launch Location',
                subtitle: 'J3',
                type: 'point',
                coordinate: { latitude: 35.195566, longitude: -106.596851 },
                image: 'launch_site',
              },
            ],
            K: [
              {
                id: 'ci3o4gldv0035epqox3j25eg2',
                title: 'Launch Location',
                subtitle: 'K2',
                type: 'point',
                coordinate: { latitude: 35.195803, longitude: -106.59639 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glds0033epqogqb1i130',
                title: 'Launch Location',
                subtitle: 'K10',
                type: 'point',
                coordinate: { latitude: 35.196554, longitude: -106.599012 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle2003aepqob865ijg4',
                title: 'Launch Location',
                subtitle: 'K7',
                type: 'point',
                coordinate: { latitude: 35.196251, longitude: -106.597974 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldx0037epqoe9tsdwkl',
                title: 'Launch Location',
                subtitle: 'K4',
                type: 'point',
                coordinate: { latitude: 35.195985, longitude: -106.597017 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle4003cepqozgyatdg6',
                title: 'Launch Location',
                subtitle: 'K9',
                type: 'point',
                coordinate: { latitude: 35.196469, longitude: -106.59869 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldw0036epqoigzoi7pg',
                title: 'Launch Location',
                subtitle: 'K3',
                type: 'point',
                coordinate: { latitude: 35.195898, longitude: -106.596699 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldt0034epqorn5jqi52',
                title: 'Launch Location',
                subtitle: 'K11',
                type: 'point',
                coordinate: { latitude: 35.196647, longitude: -106.599321 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle3003bepqojkbpocic',
                title: 'Launch Location',
                subtitle: 'K8',
                type: 'point',
                coordinate: { latitude: 35.196382, longitude: -106.598377 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle00039epqodkg7hxvu',
                title: 'Launch Location',
                subtitle: 'K6',
                type: 'point',
                coordinate: { latitude: 35.196169, longitude: -106.59764 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldz0038epqo8o25j2p0',
                title: 'Launch Location',
                subtitle: 'K5',
                type: 'point',
                coordinate: { latitude: 35.196072, longitude: -106.597332 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gldr0032epqo5ulb400d',
                title: 'Launch Location',
                subtitle: 'K1',
                type: 'point',
                coordinate: { latitude: 35.195689, longitude: -106.595978 },
                image: 'launch_site',
              },
            ],
            L: [
              {
                id: 'ci3o4gler003nepqoln3lewsj',
                title: 'Launch Location',
                subtitle: 'L9',
                type: 'point',
                coordinate: { latitude: 35.196778, longitude: -106.598561 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glee003jepqomhveojbn',
                title: 'Launch Location',
                subtitle: 'L5',
                type: 'point',
                coordinate: { latitude: 35.196392, longitude: -106.59719 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle6003eepqo36hht7uw',
                title: 'Launch Location',
                subtitle: 'L10',
                type: 'point',
                coordinate: { latitude: 35.196877, longitude: -106.598874 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gleo003lepqo09jyfh7e',
                title: 'Launch Location',
                subtitle: 'L7',
                type: 'point',
                coordinate: { latitude: 35.19658, longitude: -106.597833 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glep003mepqo216lhm5q',
                title: 'Launch Location',
                subtitle: 'L8',
                type: 'point',
                coordinate: { latitude: 35.196697, longitude: -106.598235 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glec003iepqo8asmzik4',
                title: 'Launch Location',
                subtitle: 'L4',
                type: 'point',
                coordinate: { latitude: 35.196309, longitude: -106.596883 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glea003gepqofzj2rw7x',
                title: 'Launch Location',
                subtitle: 'L2',
                type: 'point',
                coordinate: { latitude: 35.196122, longitude: -106.596251 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glen003kepqo29dj4r29',
                title: 'Launch Location',
                subtitle: 'L6',
                type: 'point',
                coordinate: { latitude: 35.196483, longitude: -106.597508 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gleb003hepqof6k19h46',
                title: 'Launch Location',
                subtitle: 'L3',
                type: 'point',
                coordinate: { latitude: 35.196217, longitude: -106.596571 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle5003depqo3hd9xayp',
                title: 'Launch Location',
                subtitle: 'L1',
                type: 'point',
                coordinate: { latitude: 35.196005, longitude: -106.595843 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gle8003fepqoad8k5ddh',
                title: 'Launch Location',
                subtitle: 'L11',
                type: 'point',
                coordinate: { latitude: 35.196968, longitude: -106.599184 },
                image: 'launch_site',
              },
            ],
            M: [
              {
                id: 'ci3o4glex003sepqoz2fbrhqw',
                title: 'Launch Location',
                subtitle: 'M3',
                type: 'point',
                coordinate: { latitude: 35.196529, longitude: -106.596432 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glew003repqo0kq499z7',
                title: 'Launch Location',
                subtitle: 'M2',
                type: 'point',
                coordinate: { latitude: 35.196442, longitude: -106.596107 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf2003wepqowu9d7llv',
                title: 'Launch Location',
                subtitle: 'M7',
                type: 'point',
                coordinate: { latitude: 35.196905, longitude: -106.597687 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glet003oepqom5bgyfyj',
                title: 'Launch Location',
                subtitle: 'M1',
                type: 'point',
                coordinate: { latitude: 35.196324, longitude: -106.59571 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gley003tepqobwz9xisb',
                title: 'Launch Location',
                subtitle: 'M4',
                type: 'point',
                coordinate: { latitude: 35.196633, longitude: -106.596736 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf1003vepqo4e36vhbc',
                title: 'Launch Location',
                subtitle: 'M6',
                type: 'point',
                coordinate: { latitude: 35.196813, longitude: -106.597371 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4gleu003pepqoqvvim5c0',
                title: 'Launch Location',
                subtitle: 'M10',
                type: 'point',
                coordinate: { latitude: 35.197208, longitude: -106.59873 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf0003uepqods8z9a23',
                title: 'Launch Location',
                subtitle: 'M5',
                type: 'point',
                coordinate: { latitude: 35.19672, longitude: -106.597057 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf4003yepqo7a7paqoo',
                title: 'Launch Location',
                subtitle: 'M9',
                type: 'point',
                coordinate: { latitude: 35.197118, longitude: -106.598415 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glev003qepqogu75fhnj',
                title: 'Launch Location',
                subtitle: 'M11',
                type: 'point',
                coordinate: { latitude: 35.197296, longitude: -106.599042 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf3003xepqoy1vb917u',
                title: 'Launch Location',
                subtitle: 'M8',
                type: 'point',
                coordinate: { latitude: 35.197026, longitude: -106.598095 },
                image: 'launch_site',
              },
            ],
            N: [
              {
                id: 'ci3o4glfd0045epqo1wqrtyq4',
                title: 'Launch Location',
                subtitle: 'N5',
                type: 'point',
                coordinate: { latitude: 35.197048, longitude: -106.596914 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glfc0044epqopk717lk7',
                title: 'Launch Location',
                subtitle: 'N4',
                type: 'point',
                coordinate: { latitude: 35.196951, longitude: -106.5966 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glfg0048epqoiiyms55u',
                title: 'Launch Location',
                subtitle: 'N8',
                type: 'point',
                coordinate: { latitude: 35.197347, longitude: -106.597958 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf70040epqo675jddjd',
                title: 'Launch Location',
                subtitle: 'N10',
                type: 'point',
                coordinate: { latitude: 35.197534, longitude: -106.598594 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf5003zepqouwez3sdr',
                title: 'Launch Location',
                subtitle: 'N1',
                type: 'point',
                coordinate: { latitude: 35.19666, longitude: -106.595565 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf90042epqoeqzjohjv',
                title: 'Launch Location',
                subtitle: 'N2',
                type: 'point',
                coordinate: { latitude: 35.19677, longitude: -106.59597 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glf80041epqo93f1zp5x',
                title: 'Launch Location',
                subtitle: 'N11',
                type: 'point',
                coordinate: { latitude: 35.197619, longitude: -106.5989 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glfh0049epqob0wo71y2',
                title: 'Launch Location',
                subtitle: 'N9',
                type: 'point',
                coordinate: { latitude: 35.197435, longitude: -106.598288 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glff0047epqomex1k787',
                title: 'Launch Location',
                subtitle: 'N7',
                type: 'point',
                coordinate: { latitude: 35.197236, longitude: -106.597555 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glfe0046epqo4okmiavq',
                title: 'Launch Location',
                subtitle: 'N6',
                type: 'point',
                coordinate: { latitude: 35.197141, longitude: -106.597232 },
                image: 'launch_site',
              },
              {
                id: 'ci3o4glfa0043epqowplemssj',
                title: 'Launch Location',
                subtitle: 'N3',
                type: 'point',
                coordinate: { latitude: 35.196863, longitude: -106.596294 },
                image: 'launch_site',
              },
            ],
          },
        ],
      },
    ],
    // annotations: [
    //   {
    //     coordinate: {
    //       latitude: 35.192949,
    //       longitude: -106.598359,
    //     },
    //     title: 'Launch Location',
    //     subtitle: 'A4',
    //     id: 'ci3o4glav000uepqotlin104l',
    //     image: BalloonImg,
    //   },
    //   {
    //     coordinate: {
    //       latitude: 35.193035,
    //       longitude: -106.598676,
    //     },
    //     title: 'Launch Location',
    //     subtitle: 'A5',
    //     id: 'ci3o4glaw000vepqoiwknvr83',
    //     image: BalloonImg,
    //   },
    //   {
    //     coordinate: {
    //       latitude: 35.200349,
    //       longitude: -106.596651,
    //     },
    //     title: 'Restrooms',
    //     subtitle: 'Porta Potty',
    //     id: 'ci3o4gmai0072epqoxkv86p31',
    //     image: ToiletImg,
    //   },
    //         {
    //     coordinate: {
    //       latitude: 35.199833,
    //       longitude: -106.59444,
    //     },
    //     title: 'Wood Carving Activity',
    //     subtitle: 'Chainsaw Carving',
    //     id: 'ci3o4gnb100ccepqol6e8tgd0',
    //     image: Chainsaw,
    //   },
    // ],
  };

  constructor(props) {
    super(props);

    this.props.navigator.setButtons({
      ...config.navigatorButtons,
    });

    this.props.navigator.setTitle({
      title: 'EventMap',
    });
  }

  selectImage(image_name) {
    switch (image_name) {
      case 'toilet':
        return ToiletImg;

      case 'balloon':
        return BalloonImg;

      case 'launch_site':
        return BalloonImg;

      case 'chainsaw_carving':
        return Chainsaw;

      default:
        return ToiletImg;
    }
  }

  // markerOnPress (marker) {
  //   if(this.state.selectedMarker === null) {
  //     this.setState({
  //       selectedMarker: {
  //         title: marker.title,
  //         subtitle: marker.subtitle
  //       },
  //     });
  //   }
  //   if(this.state.selectedMarker !== null && this.state.selectedMarker.subtitle !== marker.subtitle) {
  //       this.setState({
  //       selectedMarker: {
  //         title: marker.title,
  //         subtitle: marker.subtitle
  //       },
  //     });
  //   }
  // }

  render() {
    const points = [{ latitude: '35.195644', longitude: '-106.596814' }];

    // alert(this.getRegionForCoordinates(points).longitudeDelta)
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          ref="map"
          initialRegion={this.state.region}
          ref={ref => {
            this.map = ref;
          }}
        >
          {this.state.annotations[0].launch_sites[0].A.map(marker => (
            <MapView.Marker
              onPress={() =>
                this.setState({
                  selectedMarker: {
                    title: marker.title,
                    subtitle: marker.subtitle,
                  },
                })}
              onCalloutPress={() =>
                this.setState({
                  selectedMarker: {
                    title: marker.title,
                    subtitle: marker.subtitle,
                  },
                })}
              title={marker.title}
              description={marker.subtitle}
              image={marker.image}
              key={marker.id}
              coordinate={marker.coordinate}
              image={this.selectImage(marker.image)}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.bubble}
            onPress={() => this.setState({ selectedMarker: null })}
          >
            <Text>Clear Selected Location</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default EventMap;
