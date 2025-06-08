export const translations = {
  ja: {
    // ナビゲーション
    'nav.students': '学生向け',
    'nav.companies': '企業向け',
    'nav.profile': 'プロフィール',
    'nav.applications': '応募履歴',
    'nav.logout': 'ログアウト',
    'nav.settings': '設定',
    'nav.help': 'ヘルプ',

    // ホーム画面
    'home.title': '地方中小企業とデザイン学生をつなぐプラットフォーム',
    'home.subtitle': '実務経験を積みたい学生と、デザインの力で成長したい企業をマッチング。新しい学習と成長の機会を創出します。',
    'home.students.title': '学生の方',
    'home.students.description': '実際の企業プロジェクトで経験を積み、ポートフォリオを構築しながら収入も得られます。',
    'home.students.feature1': '実務経験でスキルアップ',
    'home.students.feature2': 'ポートフォリオ作成支援',
    'home.students.feature3': '収入を得ながら学習',
    'home.students.cta': 'プロジェクトを探す',
    'home.companies.title': '企業の方',
    'home.companies.description': '優秀な学生と協力して、コストを抑えながら質の高いデザインプロジェクトを実現できます。',
    'home.companies.feature1': 'コスト効率的な採用',
    'home.companies.feature2': '新鮮なアイデアと視点',
    'home.companies.feature3': '柔軟な契約形態',
    'home.companies.cta': 'プロジェクトを投稿',

    // 学生画面
    'student.title': 'プロジェクト一覧',
    'student.subtitle': 'あなたのスキルにマッチするプロジェクトを見つけましょう',
    'student.search': 'キーワード検索',
    'student.search.placeholder': 'プロジェクト名、企業名、技術...',
    'student.type': '種別',
    'student.type.all': 'すべて',
    'student.type.intern': 'インターン',
    'student.type.contract': '業務委託',
    'student.location': '地域',
    'student.location.all': 'すべて',
    'student.tags': 'カテゴリータグ',
    'student.duration': '期間',
    'student.salary': '報酬',
    'student.applicants': '名が応募中',
    'student.view_details': '詳細を見る',

    // 企業画面
    'company.dashboard': '企業ダッシュボード',
    'company.dashboard.subtitle': 'プロジェクトの管理と学生の採用を効率的に行えます',
    'company.new_project': '新しいプロジェクト',
    'company.new_project.subtitle': 'プロジェクトを投稿',
    'company.applicant_management': '応募者管理',
    'company.applicant_management.subtitle': '応募状況を確認',
    'company.student_evaluation': '学生評価',
    'company.student_evaluation.subtitle': '完了プロジェクトの評価',

    // 統計
    'stats.students': '登録学生数',
    'stats.companies': '参加企業数',
    'stats.projects': '完了プロジェクト',
    'stats.rating': '平均評価',
  },

  'zh-TW': {
    // 導航
    'nav.students': '學生專區',
    'nav.companies': '企業專區', 
    'nav.profile': '個人檔案',
    'nav.applications': '申請記錄',
    'nav.logout': '登出',
    'nav.settings': '設定',
    'nav.help': '幫助',

    // 首頁
    'home.title': '連接地方中小企業與設計學生的平台',
    'home.subtitle': '將希望累積實務經驗的學生與希望透過設計力量成長的企業進行媒合。創造新的學習與成長機會。',
    'home.students.title': '學生專區',
    'home.students.description': '在真實的企業專案中累積經驗，建構作品集的同時也能獲得收入。',
    'home.students.feature1': '透過實務經驗提升技能',
    'home.students.feature2': '作品集製作支援',
    'home.students.feature3': '在學習的同時獲得收入',
    'home.students.cta': '尋找專案',
    'home.companies.title': '企業專區',
    'home.companies.description': '與優秀的學生合作，在控制成本的同時實現高品質的設計專案。',
    'home.companies.feature1': '具成本效益的人才招募',
    'home.companies.feature2': '新鮮的想法與視角',
    'home.companies.feature3': '靈活的合約形式',
    'home.companies.cta': '發布專案',

    // 學生頁面
    'student.title': '專案列表',
    'student.subtitle': '找到符合您技能的專案',
    'student.search': '關鍵字搜尋',
    'student.search.placeholder': '專案名稱、企業名稱、技術...',
    'student.type': '類型',
    'student.type.all': '全部',
    'student.type.intern': '實習',
    'student.type.contract': '外包',
    'student.location': '地區',
    'student.location.all': '全部',
    'student.tags': '分類標籤',
    'student.duration': '期間',
    'student.salary': '報酬',
    'student.applicants': '名已申請',
    'student.view_details': '查看詳情',

    // 企業頁面
    'company.dashboard': '企業儀表板',
    'company.dashboard.subtitle': '高效管理專案與學生招募',
    'company.new_project': '新專案',
    'company.new_project.subtitle': '發布專案',
    'company.applicant_management': '申請者管理',
    'company.applicant_management.subtitle': '確認申請狀況',
    'company.student_evaluation': '學生評價',
    'company.student_evaluation.subtitle': '完成專案的評價',

    // 統計
    'stats.students': '註冊學生數',
    'stats.companies': '參與企業數',
    'stats.projects': '完成專案',
    'stats.rating': '平均評價',
  }
};

export function t(key: string, lang: string = 'ja'): string {
  const langData = translations[lang as keyof typeof translations];
  return langData?.[key as keyof typeof langData] || key;
} 