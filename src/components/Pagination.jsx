import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ last, url, current }) => {
    // 한 섹션에 표시할 페이지 수
    const pagesPerSection = 5;
    // 현재 섹션 시작과 끝 페이지 계산
    const currentSectionStart = Math.floor((current - 1) / pagesPerSection) * pagesPerSection + 1;
    console.log("🚀 ~ Pagination ~ currentSectionStart:", currentSectionStart);
    const currentSectionEnd = Math.min(currentSectionStart + pagesPerSection - 1, last);
    console.log("🚀 ~ Pagination ~ currentSectionEnd:", currentSectionEnd);

    // 이전 섹션과 다음 섹션 페이지 번호 계산
    const hasPreviousSection = currentSectionStart > 1;
    const hasNextSection = currentSectionEnd < last;

    // 페이지 번호 배열 생성
    const pages = Array.from(
        { length: currentSectionEnd - currentSectionStart + 1 },
        (_, idx) => currentSectionStart + idx
    );

    return (
        <div className="absolute w-[60%] h-[30px] bottom-20 bg-slate-600 flex justify-center items-center gap-4">
            {hasPreviousSection && (
                <Link to={`${url}/${currentSectionStart - pagesPerSection}`}>
                    <span>◁ </span>
                </Link>
            )}

            {pages.map((page) => {
                return (
                    <Link to={`${url}/${page}`} key={page}>
                        <span className={current == page ? "text-white" : ""}>{page}</span>
                    </Link>
                );
            })}

            {hasNextSection && (
                <Link to={`${url}/${currentSectionEnd + 1}`}>
                    <span> ▷</span>
                </Link>
            )}
        </div>
    );
};

export default Pagination;
