import { axios } from '../utils/request';
import { SEARCH_MODULE, PAPER_MODULE } from './_prefix';

// 搜索信息类型

// 根据指定关键词查找
export const searchByKeyword = (keyword: string, page: number) => {
    return axios.get(`${SEARCH_MODULE}/search/${keyword}/${page}`,
        { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
            return res;
        });
};

// 根据论文Id获取指定论文详情
export const getPaperById = (paperId: number) => {
    return axios.get(`${PAPER_MODULE}/${paperId}/detail`)
        .then(res => {
            return res;
        });
};

// 根据论文Id获取相关论文
export const getRelatedPaperById = (paperId: number) => {
    return axios.get(`${PAPER_MODULE}/${paperId}/related`)
        .then(res => {
            return res;
        });
};

// 根据论文Id获取同类论文
export const getSimilarPaperById = (paperId: number, page: number) => {
    return axios.get(`${PAPER_MODULE}/${paperId}/category/${page}`)
        .then(res => {
            return res;
        });
};

// 根据论文Id获取引用论文
export const getCitedPaperById = (paperId: number) => {
    return axios.get(`${PAPER_MODULE}/${paperId}/cited`)
        .then(res => {
            return res;
        });
};
