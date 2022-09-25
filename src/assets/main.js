const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_ntDY8t8158ynwX-YVPfhA&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById("content");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4603ef4a49mshe6bad1e8d8a1dcep1ae0cejsna25e36e2436e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fethData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// funcion que se llama a sí misma.
(async () => {
    try {
        const videos = await fethData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}        
        `;
        content.innerHTML = view;
    } catch (error) {
        // alert('Hubo un error al cargar la API');
        console.log(error);
    }
})();