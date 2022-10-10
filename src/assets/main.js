// const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_ntDY8t8158ynwX-YVPfhA&part=snippet%2Cid&order=date&maxResults=9';
// const API = 'https://dog.ceo/api/breeds/image/random';
// const API = 'https://api.escuelajs.co/api/v1/products';
// const API = 'https://photoslibrary.googleapis.com/v1/albums/AMQ41fHxrlTIRgy2GnTefhSiWHOSl3wHs_KetUQqpUMHGiPzv0n1-SWQOfQhMPTOYkZ1jeqZTjiR';
const API = 'https://photoslibrary.googleapis.com/v1/albums';
const content = null || document.getElementById("content");
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer oauth2-token',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        // 'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    }
};

async function fethData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// funcion que se llama a sí misma.
(async () => {
    console.log('inicio automático asíncrona');
    try {
        const videos = await fethData(API);
        console.log(videos);
        // let view = `
        // ${videos.items.map(video => `
        // <div class="group relative">
        //     <div
        //         class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        //         <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        //     </div>
        //     <div class="mt-4 flex justify-between">
        //         <h3 class="text-sm text-gray-700">
        //             <span aria-hidden="true" class="absolute inset-0"></span>
        //             ${video.snippet.title}
        //         </h3>
        //     </div>
        // </div>
        // `).slice(0, 4).join('')}
        // `;
        // content.innerHTML = view;
    } catch (error) {
        console.log("error");
        console.log(error);
    }
})();

// async function loadApi() {
//     try {
//         console.log('funcion asíncrona');
//         const videos = await fethData(API);
//         let view = `
//         ${videos.items.map(video => `
//         <div class="group relative">
//             <div
//                 class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
//                 <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
//             </div>
//             <div class="mt-4 flex justify-between">
//                 <h3 class="text-sm text-gray-700">
//                     <span aria-hidden="true" class="absolute inset-0"></span>
//                     ${video.snippet.title}
//                 </h3>
//             </div>
//         </div>
//         `).slice(0, 4).join('')}        
//         `;
//         content.innerHTML = view;
//     } catch (error) {
//         console.log(error);
//     }
// }

