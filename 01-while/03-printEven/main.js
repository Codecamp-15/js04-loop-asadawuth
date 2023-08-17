for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) continue;
    console.log(i)
}


///////////////// อันล่างเสริมเฉลย

for (let i = 1; i <= 20; i++) {
    // i = 2 log(2), log(even)
    if (i % 2 == 0) console.log(i);
    else continue; // update ค่า และเริ่มรัน loop รอบถัดไป
    console.log('even');
}