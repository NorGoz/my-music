export function validatenip(nip: any) {
    var nipWithoutDashes = nip.replace(/-/g,"");
    var reg = /^[0-9]{10}$/;
    if(!reg.test(nipWithoutDashes)) {
        return false;}
    else
    {
        var digits = (""+nipWithoutDashes).split("");
        var checksum = (6*parseInt(digits[0]) + 5*parseInt(digits[1]) + 7*parseInt(digits[2]) + 2*parseInt(digits[3]) + 3*parseInt(digits[4]) + 4*parseInt(digits[5]) + 5*parseInt(digits[6]) + 6*parseInt(digits[7]) + 7*parseInt(digits[8]))%11;

        return (parseInt(digits[9])==checksum);
    }
}