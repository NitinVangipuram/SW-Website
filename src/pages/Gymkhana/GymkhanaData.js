import image5 from '../../images/sport5.png';
import techClub from '../../images/technical1.jpg';
import sport1 from '../../images/sports1.jpg';
import sport2 from '../../images/sports2.jpg';
import sport3 from '../../images/sports3.jpg';

import NSSimg1 from '../../images/nss/1.jpg';
import NSSimg2 from '../../images/nss/2.jpg';
import NSSimg3 from '../../images/nss/3.jpg';
import NSSimg4 from '../../images/nss/4.jpg';
import NSSimg5 from '../../images/nss/5.jpg';
import NSSimg6 from '../../images/nss/6.jpg';
import NSSimg7 from '../../images/nss/7.jpg';
import NSSimg8 from '../../images/nss/8.jpg';
import NSSimg9 from '../../images/nss/9.jpg';
import NSSimg10 from '../../images/nss/10.jpg';
import NSSimg11 from '../../images/nss/11.jpg';
import NSSimg12 from '../../images/nss/12.jpg';
import NSSimg13 from '../../images/nss/13.jpg';
import NSSimg14 from '../../images/nss/14.jpg';
import NSSimg15 from '../../images/nss/15.jpg';
import NSSimg16 from '../../images/nss/16.jpg';
import NSSimg17 from '../../images/nss/17.jpg';
import NSSimg18 from '../../images/nss/18.jpg';


import cultural1 from '../../images/homeimage8.jpg';
import nsss from '../../images/studentcampus5.png';

import image1 from '../../images/gymkhana1.jpg';
import image2 from '../../images/gymkhana2.jpg';
import image3 from '../../images/gymkhana3.jpg';
import image4 from '../../images/gymkhana4.jpg';

const facultyInCharges = [
    {
        title: '',
        subTitle: '',
        subSubTitles: [
            {
                subSubTitle: 'Sports/NSS/NCC',
                people: [
                    { name: 'Prof. Kavita Devi', designation: 'Faculty-In-Charge, Students Welfare, NSS' },
                    { name: 'Prof. Vigneshwara Raja P', designation: 'Faculty-In-Charge, Students Welfare, NCC' },
                ],
            },
            {
                subSubTitle: 'Cultural & Technical Events',
                people: [
                    { name: 'Prof. Nagaveni S', designation: 'Faculty-In-Charge, Students Welfare (Cultural & Technical)' },
                ],
            },
        ],
    },
];

const secretaries = [
    {
        title: '',
        subTitle: 'General Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Krishan', designation: 'General Secretary, Sports Affairs' },
                    { name: 'Yadav Vansh Suresh', designation: 'General Secretary, Technical Affairs' },
                    { name: 'Gurvir Singh', designation: 'General Secretary, Cultural Affairs' },
                    { name: 'Kodati Tharun', designation: 'General Secretary, Hostel Affairs' },
                    { name: 'Krishna Karthik', designation: 'General Secretary, Mess Affairs' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Junior General Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Patel Saurya Ashokbhai', designation: 'Junior General Secretary, Mess Affairs' },
                    { name: 'Nilesh Kumar', designation: 'Junior General Secretary, Sports Affairs' },
                    { name: 'Samartha', designation: 'Junior General Secretary, Technical Affairs' },
                    { name: 'Mareddy Naveen Kumar Reddy', designation: 'Junior General Secretary, Cultural Affairs' },
                    { name: 'Amartya Sanjay Gawali', designation: 'Junior General Secretary, Hostel Affairs' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'PG Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Anish S K', designation: 'PG Secretary, Technical Affairs' },
                    { name: 'Rajput R Vikramsingh', designation: 'PG Secretary, Cultural Affairs' },
                    { name: 'Kaushik Shivanand Powar', designation: 'PG Secretary, Hostel Affairs' },
                    { name: 'Alok Kumar', designation: 'PG Secretary, Mess Affairs' }, // Add name if available
                ],
            },
        ],
    },
];

const clubSecretaries = [
    {
        title: '',
        subTitle: 'Tech Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Pranav Kumar Pandey', designation: 'Club Secretary, AI' },
                    { name: 'Nishant Shailesh Mehta', designation: 'Club Secretary, Space Data Science' },
                    { name: 'Animesh Jain', designation: 'Club Secretary, Robotics' },
                    { name: 'Amogh R', designation: 'Club Secretary, Coding' },
                    { name: 'Jai Sharma', designation: 'Club Secretary, Finance' },
                    { name: 'Ratish Sinha', designation: 'Club Secretary, Ingene Motorsport' },
                    { name: 'Upakramanika Bishnu', designation: 'Club Secretary, Design' },
                    { name: 'Srihari Gonahal', designation: 'Junior Club Secretary, Coding' },
                    { name: 'Vidit Parikh', designation: 'Junior Club Secretary, Robotics' },
                    { name: 'Nihar Sagar G', designation: 'Junior Club Secretary, AI' },
                    { name: 'Yash Halbhavi', designation: 'Junior Club Secretary, Finance' },
                    { name: 'Dev Kaushal', designation: 'Junior Club Secretary, Space Data Science' },
                    { name: 'Soumya Shaw', designation: 'Junior Club Secretary, Ingene Motorsport' },
                    { name: 'Saipushkar Nagaraj', designation: 'Junior Club Secretary, Design' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Sports Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Shivam Kumar', designation: 'Club Secretary, Athletics' },
                    { name: 'Maddela Vaishwitha', designation: 'Club Secretary, Badminton' },
                    { name: 'Nipun Gupta', designation: 'Club Secretary, Basketball' },
                    { name: 'Khot Atharva Deepak', designation: 'Club Secretary, Chess' },
                    { name: 'Tanishq Singh', designation: 'Club Secretary, Weightlifting' },
                    { name: 'Suharsh Agrawal', designation: 'Club Secretary, Cricket' },
                    { name: 'Krishnanshu Yadav', designation: 'Club Secretary, E-Sports' },
                    { name: 'Vedansh Chaudhary', designation: 'Club Secretary, Football' },
                    { name: 'Omkar Kulkarni', designation: 'Club Secretary, Tennis' },
                    { name: 'G. Rishikesh', designation: 'Club Secretary, Volleyball' },
                    { name: 'Aryawardhansingh Solanki', designation: 'Junior Club Secretary, Basketball' },
                    { name: 'Kamatham Varshith', designation: 'Junior Club Secretary, Chess' },
                    { name: 'B. Rajesh', designation: 'Junior Club Secretary, Cricket' },
                    { name: 'Ayaan Karim', designation: 'Junior Club Secretary, Football' },
                    { name: 'Pullipudi Sri Smaran', designation: 'Junior Club Secretary, Table Tennis' },
                    { name: 'Deepansh Pandey', designation: 'Junior Club Secretary, Tennis' },
                    { name: 'M. Aditya', designation: 'Junior Club Secretary, Volleyball' },
                    { name: 'Aditi Soukar', designation: 'Girls nominee for sports' },
                ],
            },
        ],
    },
    {
        title: '',
        subTitle: 'Cultural Club Secretaries',
        subSubTitles: [
            {
                subSubTitle: '',
                people: [
                    { name: 'Vedant Kannur', designation: 'Club Secretary, Dramatics' },
                    { name: 'Yogita Darji', designation: 'Club Secretary, Fine Arts' },
                    { name: 'Prachi Prasoon', designation: 'Club Secretary, Literary' },
                    { name: 'Mann Maru', designation: 'Club Secretary, Music' },
                    { name: 'Bidipta Saha', designation: 'Club Secretary, Photography and Films' },
                    { name: 'Gaurav Singhal', designation: 'Club Secretary, Quiz' },
                    { name: 'Lavanya Jayant Shende', designation: 'Club Secretary, Dhristi' },
                    { name: 'Pooja Ramesh', designation: 'Club Secretary, Dance' },
                    { name: 'Prajwal N Prasad', designation: 'Junior Club Secretary, Literary' },
                    { name: 'Kaushal Aditya Bhooshan', designation: 'Junior Club Secretary, Music' },
                    { name: 'Mayank Sharma', designation: 'Junior Club Secretary, Photography and Films' },
                    { name: 'Utkarsh Raj', designation: 'Junior Club Secretary, Prabodhini' },
                    { name: 'Preksha Patange', designation: 'Junior Club Secretary, Dhristi' },
                ],
            },
        ],
    },
];


const imagesSports = [
    { src: sport1, alt: 'Sport Image 1' },
    { src: sport2, alt: 'Sport Image 2' },
    { src: sport3, alt: 'Sport Image 3' },
    { src: image4, alt: 'Sport Image 4' },
    { src: image2, alt: 'Sport Image 5' },
    { src: image3, alt: 'Sport Image 6' },
    { src: image5, alt: 'Sport Image 7' },
    { src: image1, alt: 'Sport Image 8' },
];

const imagesCultural = [
    { src: cultural1, alt: 'Cultural Image 1' },
];


const imagesTech = [
    { src: techClub, alt: 'Tech Image 1' },
];

const imagesSocial = [
    { src: NSSimg1, alt: 'Social Image 1' },
    { src: NSSimg2, alt: 'Social Image 2' },
    { src: NSSimg3, alt: 'Social Image 3' },
    { src: NSSimg4, alt: 'Social Image 4' },
    { src: NSSimg5, alt: 'Social Image 5' },
    { src: NSSimg6, alt: 'Social Image 6' },
    { src: NSSimg7, alt: 'Social Image 7' },
    { src: NSSimg8, alt: 'Social Image 8' },
    { src: NSSimg9, alt: 'Social Image 9' },
    { src: NSSimg10, alt: 'Social Image 10' },
    { src: NSSimg11, alt: 'Social Image 11' },
    { src: NSSimg12, alt: 'Social Image 12' },
    { src: NSSimg13, alt: 'Social Image 13' },
    { src: NSSimg14, alt: 'Social Image 14' },
    { src: NSSimg15, alt: 'Social Image 15' },
    { src: NSSimg16, alt: 'Social Image 16' },
    { src: NSSimg17, alt: 'Social Image 17' },
    { src: NSSimg18, alt: 'Social Image 18' },
];


export {facultyInCharges, secretaries, clubSecretaries, imagesSports, imagesCultural, imagesTech, imagesSocial};