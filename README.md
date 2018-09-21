# Download

[↓ Download zip file](https://github.com/frontend-isobar-jp/megane_guideline/blob/master/meagne_guideline.zip?raw=true)

**ダウンロードしたファイルをプロジェクトルート直下に配置します。**

----

# Demo

[https://frontend-isobar-jp.github.io/megane_guideline/public/guideline/](https://frontend-isobar-jp.github.io/megane_guideline/public/guideline/)

----

# Gulp の設定に関して ( gulpfile.js )
- リポジトリ「megane_download」と「mgn-gulp-preset」をクローンした上でGulpの追加設定を行って下さい。

___

## SASS | gulp-sass

### 1. Setting

```
{
    'src': './src_guideline/scss/**/', // sass path
    'dist': ROOT_PATH + 'guideline/assets/css/' // css path
}
```

___

## Scripts |

### 1. setting追加

```
{
    'src': './src_guideline/js/',
    'dist': ROOT_PATH + 'guideline/assets/js',
    'fileName': [ // main file
        'component.js',
        'main.js'
    ]
}
```
