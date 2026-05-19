import { describe, expect, it } from 'vitest';
import { getYouTubeID } from '../src/index.js';

describe('ID parser', () => {
    it.each`
        id | url
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/watch?v=-wtIMTCHWuI'}
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/v/-wtIMTCHWuI?version=3&autohide=1'}
        ${'-wtIMTCHWuI'} | ${'http://youtu.be/-wtIMTCHWuI'}
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/watch?v=-wtIMTCHWuI'}
        ${'zc0s358b3Ys'} | ${'http://www.youtube.com/embed/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?v=u8nQa1cJyX8'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?argv=xyzxyzxyzxy&v=u8nQa1cJyX8'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/embed/0zM3nApSvMg?rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://youtu.be/0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/embed/0zM3nApSvMg?rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://youtu.be/0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s'}
        ${'0zM3nApSvMg'} | ${'youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg'}
        ${'LXilEPmkoQY'} | ${'http://www.youtube.com/embed/LXilEPmkoQY'}
        ${'LXilEPmkoQY'} | ${'http://www.youtube.com/v/LXilEPmkoQY'}
        ${'y_Rd2hByRyc'} | ${'http://www.youtube.com/watch?feature=player_embedded&v=y_Rd2hByRyc'}
        ${'LRARHtMzZQE'} | ${'https://www.youtube.in/watch?v=LRARHtMzZQE'}
        ${'i2r-hGsuHT4'} | ${'https://m.youtube.com/shorts/i2r-hGsuHT4?ra=m'}
        ${'_ARyA3TYYpA'} | ${'https://youtu.be/_ARyA3TYYpA?si=ZZq7bl8IBREAKy5z'}
    `('can parse $id from $url', (params: { url: string, id: string }) => {
        expect(getYouTubeID(params.url, { fuzzy: false })).toBe(params.id);
    });

    it.each`
        id | url
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/watch?v=-wtIMTCHWuI'}
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/v/-wtIMTCHWuI?version=3&autohide=1'}
        ${'-wtIMTCHWuI'} | ${'http://youtu.be/-wtIMTCHWuI'}
        ${'-wtIMTCHWuI'} | ${'http://www.youtube.com/watch?v=-wtIMTCHWuI'}
        ${'zc0s358b3Ys'} | ${'http://www.youtube.com/embed/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'zc0s358b3Ys'} | ${'http://youtu.be/zc0s358b3Ys'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?v=u8nQa1cJyX8'}
        ${'u8nQa1cJyX8'} | ${'http://www.youtube.com/watch?argv=xyzxyzxyzxy&v=u8nQa1cJyX8'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/embed/0zM3nApSvMg?rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://youtu.be/0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/embed/0zM3nApSvMg?rel=0'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://youtu.be/0zM3nApSvMg'}
        ${'0zM3nApSvMg'} | ${'http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s'}
        ${'0zM3nApSvMg'} | ${'youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg'}
        ${'LXilEPmkoQY'} | ${'http://www.youtube.com/embed/LXilEPmkoQY'}
        ${'LXilEPmkoQY'} | ${'http://www.youtube.com/v/LXilEPmkoQY'}
        ${'y_Rd2hByRyc'} | ${'http://www.youtube.com/watch?feature=player_embedded&v=y_Rd2hByRyc'}
        ${'LRARHtMzZQE'} | ${'https://www.youtube.in/watch?v=LRARHtMzZQE'}
        ${'i2r-hGsuHT4'} | ${'https://m.youtube.com/shorts/i2r-hGsuHT4?ra=m'}
        ${'_ARyA3TYYpA'} | ${'https://youtu.be/_ARyA3TYYpA?si=ZZq7bl8IBREAKy5z'}
        ${'QdK8U-VIH_o'} | ${'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o'}
    `('can parse $id from $url using fuzzy parser', (params: { url: string, id: string }) => {
        expect(getYouTubeID(params.url)).toBe(params.id);
    });

    it.each`
        url
        ${'https://whoisworm.com/video/376'}
        ${'https://guzmer.org/videos/V01rC6PWT-A'}
    `('rejects non-YouTube url $url', (params: { url: string }) => {
        expect(getYouTubeID(params.url, { fuzzy: true })).toBe(null);
    });

    it.each`
        fuzzy | url
        ${false} | ${'http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o'}
        ${true}  | ${'https://www.youtube.com/channel/UCioYoEZgUdrQ8-OMViQ9b1g'}
        ${true}  | ${''}
    `('rejects non-video YouTube url $url with fuzzy = $fuzzy', (params: { url: string, fuzzy: boolean }) => {
        expect(getYouTubeID(params.url, { fuzzy: params.fuzzy })).toBe(null);
    })
});
