import recruitingList from "../datas/recruiting-list.json";

export function recruitingListByQuery(query) {
    if (!query) {
        return recruitingList;
    }

    const filterResult = recruitingList.filter((item) =>
        new RegExp(query, "i").test(item.title)
    );

    return filterResult;
}
